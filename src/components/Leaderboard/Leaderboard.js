import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; // Import the stylesheet
import { useQuizAction, useQuizState} from '../../Provider/QuizProvider';


function Leaderboard() {
const {fetchData,fetchLeader}=useQuizAction();
const status=useQuizState();
const [scoreState,setScoreState]=useState([]);

console.log("state:",status)


  const [highScores, setHighScores] = useState([]);
  const [activeQuizType, setActiveQuizType] = useState(null);

  useEffect(() => {
    fetchData();
    
    // Fetch high scores from localStorage 
    const storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(storedHighScores);
  }, []);

  // Assuming each entry has a 'quizType' property
  const tables = {};

  // Group entries by quizType
  highScores.forEach(entry => {
    if (!tables[entry.quizType]) {
      tables[entry.quizType] = [];
    }
    tables[entry.quizType].push(entry);
  });

  const handleQuizTypeChange = (quizType) => {
    setActiveQuizType(quizType);
    const quizScore=status.items.filter(d=>d.name===quizType)
    fetchLeader(quizScore[0].id);
  };

  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      <div className="quiz-selector">
        <p className='selectQuiz'>Select a Quiz Type:</p>
        <select onChange={(e) => handleQuizTypeChange(e.target.value)}>
          <option value={null}>Select</option>
          {status.items?.map((quizType, index) => (
            <option key={index} value={quizType.name}>
              {quizType.name} quiz
            </option>
          ))}
        </select>
      </div>
      {activeQuizType && status.score && (
        <div className="quiz-table-container">
          <h3 className='QuizType'>{activeQuizType} quiz</h3>
          <table className="quiz-table">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {status.score.map((entry, entryIndex) => (
                <tr key={entryIndex}>
                  <td>{entryIndex + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );  
}

export default Leaderboard;