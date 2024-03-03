// Dashboard.jsx

import React,{useState,useContext} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import DashBoardData from './QuizTitles';
import { AuthContext } from '../../Provider/AuthProvider/context';

import './dashboard.css';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

function Dashboard(props) {
  const { user} = useContext(AuthContext)
  const { data, loading } = DashBoardData();

  return (
    loading ? 
      <h3 className='loading'>Loading Categories</h3> :
      <div className="text-content">
        <h1>Hi {user.name} </h1>
        <h1>ARE YOU READY TO UPSKILL YOURSELF?</h1>
        <h4>Ctrl + Alt + Quiz: Reboot Your Brain Cells!!</h4>
        <div className="cardBox">
          
           
            {data.result.items.map((item, index) => (
             
            generateCard(item.name,"BEGINNER",item.src, `quiz`, item.id,item.name)
          ))}
           
        </div>
      </div>
  );
}

function generateCard(title, level, iconSrc, linkTo,id) {
  console.log()
  return (
    <Link to={{ pathname: linkTo,search:'id='+id}} className="custom-link" key={title}>
      <div className="card" key={id}>
        <div className='name'>
          <div className="numbers">{title}</div>
          <div className="cardName">{level}</div>
        </div>
        <img src={iconSrc} alt={title} className="quizIcon" />
      </div>
    </Link>
  );
}

export default Dashboard;
