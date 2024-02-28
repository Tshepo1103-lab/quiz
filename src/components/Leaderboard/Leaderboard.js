import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; // Import the stylesheet

function Leaderboard() {
  const [highScores, setHighScores] = useState([]);
  const [activeQuizType, setActiveQuizType] = useState(null);

  useEffect(() => {
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
  };

  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      <div className="quiz-selector">
        <p>Select a Quiz Type:</p>
        <select onChange={(e) => handleQuizTypeChange(e.target.value)}>
          <option value={null}>Select</option>
          {Object.keys(tables).map((quizType, index) => (
            <option key={index} value={quizType}>
              {quizType} Quiz
            </option>
          ))}
        </select>
      </div>
      {activeQuizType && tables[activeQuizType] && (
        <div className="quiz-table-container">
          <h3>{activeQuizType} Quiz</h3>
          <table className="quiz-table">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {tables[activeQuizType].map((entry, entryIndex) => (
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