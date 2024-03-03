import React,{useContext} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import DashBoardData from './QuizTitles';
import { AuthContext } from '../../Provider/AuthProvider/context';
import './dashboard.css';

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

//creating component to display quizzes
function Dashboard() {
  const { user} = useContext(AuthContext)
  const { data, loading } = DashBoardData();

//return landing page and calling the function and passing the arguments
  return (
    loading ? 
      <h3 className='loading'>Loading Categories</h3> :
      <div className="text-content">
        <h1>Hi <span className='nameUser'>{user.name}</span> </h1>
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

//function to generate the cards, it takes in parameters to do that
function generateCard(title, level, iconSrc, linkTo,id) {
  debugger;
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
