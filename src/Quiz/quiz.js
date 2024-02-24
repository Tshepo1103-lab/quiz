import React, { useState } from 'react';
import Questions from '../storage/react.json';
import { Link } from 'react-router-dom';
import './quiz.css';

function Quiz() {
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

  return (
    <div className="QuizContainer">
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
        </div>
      )}

      {mark && (
        <div className='score'>
          
          <h2 className='scoreMessage'>{score<5?'Better luck next time!':'very impressive!'}</h2>
          <p>Your Score: {score}</p>
          <Link to='/leaderboard'>View LeaderBoard</Link>
        </div>
      )}
    </div>
  );
}

export default Quiz;