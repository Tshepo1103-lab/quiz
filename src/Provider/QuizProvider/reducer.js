import {handleActions } from "redux-actions"; 
import { QuizActionEnums } from './actions';


export const quizReducer=handleActions(
    {
        [QuizActionEnums.QUIZ]:(state,action)=>({
            ...state,
            ...action.payload
        }),
        [QuizActionEnums.LEADERBOARD]:(state,action)=>({
            ...state,
            score:[...action.payload]
        })
    },{}
)