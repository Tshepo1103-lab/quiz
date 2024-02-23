import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useAuthStateContext } from '../../AuthProvider';
import { useAuthActionContext } from '../../AuthProvider';

 function NavBar(){
  const status=useAuthStateContext();
  const {logout}=useAuthActionContext();
  console.log(status);
  return (
    <nav className='navbar'>
      <ul>
          <li>
            <Link to='/'>Home</Link>    
          </li>
          <li className='logout' onClick={(e)=>{logout()}}>
            {status.authenticated&&<Link to='/Login'>Logout</Link>}   
            {!status.authenticated&&<Link to='/Login'>Login</Link>}  
          </li>
      </ul>
    </nav>

  );
}
export default NavBar;