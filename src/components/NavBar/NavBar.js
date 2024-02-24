import React,{useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useAuthStateContext } from '../../AuthProvider';
import { useAuthActionContext } from '../../AuthProvider';


 function NavBar({theme,setTheme}){
  const toggle_mode=()=>{
    theme==='light'?setTheme('dark') : setTheme('light');
  }
  const status=useAuthStateContext();
  const {logout}=useAuthActionContext();
  const toggle_light='./img/light.jpg';
  const toggle_dark='./img/dark.jpg';

  return (
    // <nav className='navbar'>
    //   <ul>
    //       <li>
    //         <Link to='/'>Home</Link>    
    //       </li>
    //       <li>
    //         <Link to='/'>leaderboard</Link>    
    //       </li>
    //       <li className='logout' onClick={(e)=>{logout()}}>
    //         {status.authenticated&&<Link to='/Login'>Logout</Link>}   
    //         {!status.authenticated&&<Link to='/Login'>Login</Link>}  
    //       </li>
    //   </ul>
    // </nav>
    <nav className='navbar'>
      {status.authenticated&&
      <ul>
      <Link to='/'>Home</Link>
        <li>
          Leaderboard    
        </li>
        <li className='logout' onClick={(e)=>{logout()}}>
         {status.authenticated&&<Link to='/Login'>Logout</Link>}   
         {!status.authenticated&&<Link to='/Login'>Login</Link>}  
        </li>
     </ul>
      }
      <img src={theme==='light'?toggle_dark:toggle_light} onClick={()=>{toggle_mode()}} alt="mode" className='toggle-icon'/>
  </nav>
    

  );
}
export default NavBar;