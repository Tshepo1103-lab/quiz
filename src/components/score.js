import React from 'react';
import {Link} from 'react-router-dom';

function Score({score,mark}){
    return(
        <>
            {mark && (
        <div className='score'>
          
          <h2 className='scoreMessage'>{score<5?'Better luck next time!':'very impressive!'}</h2>
          <p>Your Score: {score}</p>
          <Link to='/leaderboard'>View LeaderBoard</Link>
        </div>
      )}   
        </>
    )
}
export default Score;