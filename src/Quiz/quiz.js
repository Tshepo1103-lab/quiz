import React, { useState, useEffect } from 'react';
import Score from '../components/score';
import './quiz.css';

const Quiz=(props)=> {
  const [current, setCurrent] = useState(0);
  const [mark, setMark] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  console.log("Id?????",props.id);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get('id');

  console.log("LOG:::id",id)
  
  useEffect(() => {
    console.log("LOG:::Data",)
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:44311/api/services/app/Question/GetAllIncluding?quizId="+id);
        const json = await response.json();
        setData(json.result);
        console.log("LOG:::Data",json.result)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[id]);

useEffect(() => {
  const fetchAnswer = async () => {
    try {
      const response = await fetch(`https://localhost:44311/api/services/app/Answer/GetAnswersAllIncluding?questionId=${data[current].id}`);
      const json = await response.json();
      console.log("answeers", json)
      if (json?.result != null){
        
        setAnswer(json?.result);
      }
       
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (data[current]) {
    fetchAnswer();
  }
}, [data,current]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No questions found.</div>;
  }

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (current === data.length - 1) {
      setMark(true);
    } else {
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  }

  // function handleNext() {
  //   if (current < data.length - 1) {
  //     setCurrent((prevCurrent) => prevCurrent + 1);
  //   }
  // }
  // console.log("State",answer)
  // function handlePrevious() {
  //   if (current > 0) {
  //     setCurrent((prevCurrent) => prevCurrent - 1);
  //   }
  // }

  return (
    <div className='quiz-container'>
      <div className="Quiz-Container">
        {!mark && (
          <div className='question-section'>
            <div className='question-count'>
              Question {current + 1}/{data.length}
            </div>
            <div className='question-text'>{`${data[current].text}?`}</div>
          </div>
        )}

        {!mark && (
          <div className='Answer-container'>
            { answer.map((ans, answerIndex) => (
              <ul key={answerIndex}>
                <li className='listButton'>
                  <input
                    className='Button'
                    type="button"
                    value={ans.text}
                    onClick={() => handleAnswer(ans.isCorrect)}
                  />
                </li>
              </ul>
            ))}
            {/* <div>
              <button className='Button' onClick={handlePrevious} disabled={current === 0}>Previous</button>
              <button className='Button' onClick={handleNext} disabled={current === data.length - 1}>Next</button>
            </div> */}
          </div>
        )}
        <Score score={score} mark={mark}/>
      </div>
    </div>
  );
}

export default Quiz;
