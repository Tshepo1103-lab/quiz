import React,{useState,useEffect} from 'react';
import Quiz from './quiz';

const QuizData = () => {
    const [data, setData] = useState({});
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('https://localhost:44311/api/services/app/Question/GetAllIncluding');
           const json = await response.json();
           setData(json);
         } catch (error) {
           console.error(error);
         } finally {
           setLoading(false);
         }
       };
   
       fetchData();
     }, []);
   
     return { data, loading };
   
   }
   
   export default Quiz;