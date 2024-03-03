import React, { useState,useEffect } from 'react';
import { Link} from 'react-router-dom';

function Score({ score, mark,user }) {
  //declaring the state to store the scores for the leaderboard
  const [highScores, setHighScores] = useState([]);
 

  useEffect(() => {
    // Fetch high scores from localStorage on render
    const storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(storedHighScores);
  }, []);

  //handleclick takes the name of the person,score, and quiz type and storing in an object
  function handleScore() {
    let entry = {
      name: user,
      score:score,
      quizType:"react"
    };
//taking highscores(from local storage) adding the new entry
    const newHighScores = [...highScores,entry].sort((a, b) => b.score - a.score);
    setHighScores(newHighScores);
//putting it back on the local storage
    localStorage.setItem("highScores", JSON.stringify(newHighScores));

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
//to be used on the quiz
export default Score;