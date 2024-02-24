import React from 'react'
import './dashboard.css'
import NavBar  from '../NavBar/NavBar';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
import Quiz from '../../Quiz/quiz';



function Dashboard() {
  return (
    <div className="text-content">
    <NavBar/>
    <h1>ARE YOU READY TO UPSKILL YOURSELF?</h1>
    <h4>PICK A COURSE TO GET STARTED</h4>
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
            </div>
           </Link>
          <div className="card">
                <div>
                    <div className="numbers">
                     JAVASCRIPT
                    </div>
                    <div className="cardName">
                      BEGINNER
                      </div>
                </div>
            </div>   
            <div className="card">
                <div>
                    <div className="numbers">
                     HTML
                    </div>
                    <div className="cardName">
                     BEGINNER
                    </div>
                </div>
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
            </div>   
        </div>
        <Footer/>
    </div>
  );
}
export default Dashboard;