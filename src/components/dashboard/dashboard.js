// Dashboard.jsx

import React,{useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Quiz from '../../Quiz/quiz';
import Html from '../../deleted/html/html';
import Java from '../../deleted/Javascript/javascript';
import DashBoardData from './QuizTitles';

import './dashboard.css';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>


function Dashboard() {
  const { data, loading } = DashBoardData();
  console.log("data:",data)
  return (
    loading ? 
      <h3 className='loading'>Loading Categories</h3> :
      <div className="text-content">
        <h1>ARE YOU READY TO UPSKILL YOURSELF?</h1>
        <h4>Ctrl + Alt + Quiz: Reboot Your Brain Cells!!</h4>
        <div className="cardBox">
          
           
            {data.result.items.map((item, index) => (
             
            generateCard(item.name,"BEGINNER", "./img/react-icon.png", `quiz` , <Quiz/>, item.id)
            // <li key={item.id}>{item.name}</li>
          ))}
          
        </div>
      </div>
  );
}

function generateCard(title, level, iconSrc, linkTo, element,id) {
  console.log()
  return (
    <Link to={{ pathname: linkTo,search:'id='+id }} className="custom-link" key={title}>
      <div className="card" key={id}>
        <div>
          <div className="numbers">{title}</div>
          <div className="cardName">{level}</div>
          {/* <div className="cardName"> MY ID IS {id}</div> */}
        </div>
        {/* {React.cloneElement(element, { id: id })} */}
        <img src={iconSrc} alt={title} className="quizIcon" />
      </div>
    </Link>
  );
}

export default Dashboard;
