import React, {useState, useEffect} from "react";

const DashBoardData = () => {
 const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:44311/api/services/app/Quiz/GetAll');
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


export default DashBoardData;