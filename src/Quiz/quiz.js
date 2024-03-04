import React, { useState, useEffect,useContext } from 'react';
import Score from '../components/score/score';
import { AuthContext } from '../Provider/AuthProvider/context';
import './quiz.css';

const Quiz=()=> {
  const { user} = useContext(AuthContext);
  const [current, setCurrent] = useState(0);
  const [mark, setMark] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [quizId,setQuizId]=useState('')

  //getting the id from the URL
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get('id');

  //useEffect that will only run once
  //I am saving that to the user quiz table to use for the leaderboard
  useEffect(() => {
    // Only make the POST request when the quiz is marked
    if (mark) {
      // Define the async function separately
      const PostScore = async () => {
        try {
          const url = 'https://localhost:44311/api/services/app/UserQuiz/Create';
          const body = {
            score: score,
            userId: user.id, 
            quizId: id,
          };
          const headers = {
            'Content-Type': 'application/json',
          };
  
          const response = await fetch(url, {
            headers,
            body: JSON.stringify(body),
            method: 'POST',
            mode: 'cors',
          });
        } catch (error) {
          alert(error);
        }
      };
    
      // Call the async function
      PostScore();
    }
  });

//Get the question using the Quiz id
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:44311/api/services/app/Question/GetAllIncluding?quizId="+id);
        setQuizId(id);
        const json = await response.json();
        setData(json.result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[id]);


  //Getting answers with the id of the current question
useEffect(() => {
  const fetchAnswer = async () => {
    try {
      const response = await fetch(`https://localhost:44311/api/services/app/Answer/GetAnswersAllIncluding?questionId=${data[current].id}`);
      const json = await response.json();
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

//If it is still fetching show Loading
  if (loading) {
    return <div>Loading...</div>;
  }
//if no questions are added for a quiz
  if (!data || data.length === 0) {
    return <div className="questionsFound">No questions found.</div>;
  }


//Handle click function
  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (current === data.length - 1) {
      setMark(true);
    }
    else {
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  }

  return (
    <div className='quiz-container'>
      <div className="Quiz-Container">
        {!mark && (
          <div className='question-section'>
            <div className='question-count'>
              Question {current + 1}/{data.length}
            </div>
            <div className='question-text'><h1>{`${data[current].text}?`}</h1></div>
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
          </div>
        )}
        <Score user={user.name} score={score} mark={mark}/>
      </div>
    </div>
  );
}

export default Quiz;
