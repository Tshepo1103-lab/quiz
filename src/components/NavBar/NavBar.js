import React,{useEffect, useState} from 'react';
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
  const [user, setUser] = useState({
    name: ""
  });

  const url = 'https://localhost:44311/api/services/app/Session/GetCurrentLoginInformations'
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTXBobyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Ik1waG9AZ21haWwuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJIM0NPNVdPQlBEVkYzNEdUQUtKUlpBUlVCQVRTV0kzUSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiOCIsImp0aSI6IjFjOTI0MzVkLTRmOGYtNDZlMi1iODBjLTAxMTdkYTZmNDZlNyIsImlhdCI6MTcwOTEzOTkxOCwibmJmIjoxNzA5MTM5OTE4LCJleHAiOjE3MDkyMjYzMTgsImlzcyI6IlF1aXpUIiwiYXVkIjoiUXVpelQifQ.JS2vuHlYaSRl6nMmFpIFkimqu7lNJ2Rt3lcietBsoZE`
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data.result.user);
      setUser(data.result.user);
    });
  });

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
        <li>
        <Link to='/' className='custom-link'>Home</Link>
        </li>
        <li>
        <Link to='/Leaderboard' className='custom-link'>leaderboard</Link>
        </li>
        <li className='logout' onClick={(e)=>{logout()}}>
         {status.authenticated&&<Link to='/Login' className='custom-link'>Logout</Link>}   
         {!status.authenticated&&<Link to='/Login' className='custom-link'>Login</Link>}  
        </li>
     </ul>
      }
      <img src={theme==='light'?toggle_dark:toggle_light} title={user?.name !== undefined || user.name !== null ? user.name : ""} onClick={()=>{toggle_mode()}} alt="mode" className='toggle-icon'/>
      {user?.name !== undefined || user.name !== null ? user.name : ""}
  </nav>
    

  );
}
export default NavBar;