import React, { useState,useEffect } from 'react';
import { Link} from 'react-router-dom';

function Score({ score, mark,user }) {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from localStorage on component mount
    const storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(storedHighScores);
  }, []);
  function handleScore() {
    let entry = {
      name: user,
      score:score,
      quizType:"react"
    };

    const newHighScores = [...highScores,entry].sort((a, b) => b.score - a.score);
    setHighScores(newHighScores);
    console.log('highScores',highScores);
    localStorage.setItem("highScores", JSON.stringify(newHighScores));

    // Navigate to the leaderboard page
    // history.push('/leaderboard');
  }

  return (
    <>
      {mark && (
        <div className='score'>
          <h2 className='scoreMessage'>{score < 5 ? 'Better luck next time!' : 'Very impressive!'}</h2>
          <p>Your Score: {score}</p>
          <Link to="/Leaderboard"><button onClick={handleScore}>View Leaderboard</button></Link>
          
        </div>
      )}
    </>
  );
}

export default Score;