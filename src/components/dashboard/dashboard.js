import React from 'react'
import './dashboard.css'
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
import Quiz from '../../Quiz/quiz';
import Java from '../../pages/Javascript/javascript';



function Dashboard() {
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
        </div>
        <Footer/>
    </div>
  );
}
export default Dashboard;