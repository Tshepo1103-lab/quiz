import React,{useState} from 'react';
import './NewQuiz.css';

function NewQuiz({Questions}){
    const[currentQuestion,setCurrentQuestion] = useState(0)

    
    return(
        <div className='body'>
         <div className='quiz-container'>
            <span className='active-question-no'>{}currentQuestion+1</span>
            <span className='total-question'>{}currentQuestion+1</span>
        </div>
        </div>
       
    )
}
export default NewQuiz;