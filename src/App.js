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
import Footer from './components/footer/footer';
import Html from './pages/html/html';
import Css from './pages/css/css';


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
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/SignUp' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>

  )
}

export default App;
