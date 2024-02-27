import React from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom';
import Quiz from '../../Quiz/quiz';
import Html from '../../pages/html/html';
import Java from '../../pages/Javascript/javascript';
import Questions from '../../storage/react.json';
import NewQuiz from '../../pages/NewQuiz/newQuiz';


function Dashboard() {
  const data = typeof Questions === 'string' ? JSON.parse(Questions) : Questions;

  return (
    <div className="text-content">
    <h1>ARE YOU READY TO UPSKILL YOURSELF?</h1>
    <h4>Ctrl + Alt + Quiz: Reboot Your Brain Cells!</h4>
        <div className="cardBox">
           <Link to="/React" element={<Quiz/>} className="custom-link">
           <div className="card">
                <div>
                    <div className="numbers">
                     React
                    </div>
                    <div className="cardName">
                      BEGINNER
                    </div>
                </div>
                <img src="./img/react-icon.png" alt="something" className='quizIcon'/>
            </div>
           </Link>
           <Link to="/javascript"  element={<Java/>} className='custom-link'>
          <div className="card">
                <div>
                    <div className="numbers">
                     JAVASCRIPT
                    </div>
                    <div className="cardName">
                      BEGINNER
                    </div>                   
                   
                </div>
                <img src="./img/javascript-icon.png" alt="something" className='quizIcon'/>
            </div>   
            </Link>
            <Link to="/html"  element={<Html/>} className='custom-link'>
            <div className="card">
                <div>
                    <div className="numbers">
                     HTML
                    </div>
                    <div className="cardName">
                     BEGINNER
                    </div>
                </div>
                <img src="./img/html-icon.png" alt="something" className='quizIcon'/>
            </div>
            </Link>
            <Link to="/css" alt="something" className='custom-link'>
             <div className="card">
                <div>
                    <div className="numbers">
                    CSS
                    </div>
                    <div className="cardName">
                      BEGINNER
                    </div>
                </div>
                <img src="./img/css-icon.png" alt="something" className='quizIcon'/>
            </div> 
            </Link>  
            <Link to="/newQuiz" element={<NewQuiz Questions={data}/>} alt="something" className='custom-link'>
             <div className="card">
                <div>
                    <div className="numbers">
                    New Quiz
                    </div>
                    <div className="cardName">
                      BEGINNER
                    </div>
                </div>
                <img src="./img/css-icon.png" alt="something" className='quizIcon'/>
            </div> 
            </Link>  
        </div>
    </div>
  );
}
export default Dashboard;