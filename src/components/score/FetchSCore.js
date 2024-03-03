import {useState, useEffect} from "react";

const FetchScores = () => {
 const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:44311/api/services/app/UserQuiz/GetTop5ForLeaderBoard?quizId=6f1a94a0-6e5f-4256-1d63-08dc38a5ff4a');
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


export default FetchScores;