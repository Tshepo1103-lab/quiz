import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from localStorage 
    const storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(storedHighScores);
  }, []);

  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard