import React, { useState } from 'react';
import Questions from '../storage/react.json';
import Score from '../components/score';
import './quiz.css';

function Quiz(props) {
  const data = typeof Questions === 'string' ? JSON.parse(Questions) : Questions;
  const [current, setCurrent] = useState(0);
  const [mark, setMark] = useState(false);
  const [score, setScore] = useState(0);

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

  function handleNext() {
    if (current < data.length - 1) {
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  }

  function handlePrevious() {
    if (current > 0) {
      setCurrent((prevCurrent) => prevCurrent - 1);
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
            <div className='question-text'>{data[current].questionText}</div>
          </div>
        )}

        {!mark && (
          <div>
            {data[current].answerOptions.map((answer, answerIndex) => (
              <ul key={answerIndex}>
                <li>
                  <input
                    className='Button'
                    type="button"
                    value={answer.answerText}
                    onClick={() => handleAnswer(answer.isCorrect)}
                  />
                </li>
              </ul>
            ))}
            <div>
              <button className='Button' onClick={handlePrevious} disabled={current === 0}>Previous</button>
              <button className='Button' onClick={handleNext} disabled={current === data.length - 1}>Next</button>
            </div>
          </div>
        )}
        <Score score={score} mark={mark}/>
      </div>
    </div>
  );
}

export default Quiz;