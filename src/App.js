import './App.css';
import { useAuthStateContext } from './AuthProvider';
import Quiz from './Quiz/quiz';
import Dashboard from './components/dashboard/dashboard';
import Login from './pages/Login/login';
import {Route,Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import { useState,useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Java from './pages/Javascript/javascript';


function App() {
  const status= useAuthStateContext();
  const currentTheme=localStorage.getItem('currentTheme');
  const [theme,setTheme]=useState(currentTheme?currentTheme:'light')
  useEffect(()=>{
    localStorage.setItem('currentTheme',theme)
  },[theme])
 

  return (
    <div className={`app-container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme}/>
     <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>} render={() =>
        status.Authenticated===true ? <Dashboard /> : <Link to="/login"/>}/>
        <Route path='/React' element={<Quiz/>}/>
        <Route path='/javascript' element={<Java/>}/>
        <Route path='/SignUp' element={<Signup/>}/>
      </Routes>
    </div>

  )
}

export default App;
