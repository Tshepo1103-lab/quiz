import React,{useState} from 'react';
import Questions from '../storage/react.json';

function Quiz() {
  const data = typeof Questions === 'string' ? JSON.parse(Questions) : Questions;
function handleAnswer(){
    console.log('Hi');
}
  return (
    <>
      {data.map(function (question) {
        return (
          <div key={question.questionText}>
            <label>{question.questionText}</label>
            <div>
              {question.answerOptions.map((answer, index) => (
              <ul>
                <li><input key={index} value={answer.answerText} onClick={handleAnswer}/></li>
              </ul>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Quiz;