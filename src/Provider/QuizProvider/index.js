import { useState,useEffect, useReducer, useContext } from "react";
import { QuizActionContext,QuizStateContext } from "./context";
import {LeaderboardAActionContext,LeaderboardStateContext} from './context';
import { quizReducer } from "./reducer";
import { LeaderboardAction, QuizAction } from "./actions";



const QuizProvider = (props) => {
    const [state,dispatch]=useReducer(quizReducer,{})
    const getState=()=>({...state})
       const fetchData = async () => {
         try {
           const response = await fetch('https://localhost:44311/api/services/app/Quiz/GetAll');
           const json = await response.json();
           console.log(json);
           dispatch(QuizAction(json.result))
         } catch (error) {
           console.error(error);
         } finally {
          //setLoading(false);
            console.log()
         }
       
        }
        const fetchLeader = async (id) => {
            try {
              const response = await fetch(`https://localhost:44311/api/services/app/UserQuiz/GetTop5ForLeaderBoard?quizId=${id}`);
              const json = await response.json();
              console.log(json);
              dispatch(LeaderboardAction(json.result))
            } catch (error) {
              console.error(error);
            } finally {
             //setLoading(false);
               console.log()
            }
          
           }
   
     return (
        
        <QuizStateContext.Provider value={getState()}>
            <QuizActionContext.Provider value={{fetchData,fetchLeader}}>
                {props.children}
            </QuizActionContext.Provider>
        </QuizStateContext.Provider>

     )
     }
     export default QuizProvider;

    export const useQuizState=()=>{
        const context=useContext(QuizStateContext);
        return context;
     }
     export const useQuizAction=()=>{
        const context=useContext(QuizActionContext);
        return context;
     }