import { createAction } from "redux-actions";

export const QuizActionEnums={
    QUIZ:"QUIZ",
    LEADERBOARD:"LEADERBOARD"
}

export const QuizAction=createAction(
    QuizActionEnums.QUIZ,
    (payload)=>payload

)
export const LeaderboardAction=createAction(
    QuizActionEnums.LEADERBOARD,
    (payload)=>payload
)

