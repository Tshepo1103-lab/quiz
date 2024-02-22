import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


 function NavBar(){
  return (
    <nav className='navbar'>
      <ul>
          <li>
            <Link to='/'>Home</Link>    
          </li>
          <li className='logout'>
              <Link to='/Login'>Logout</Link>
          </li>
      </ul>
    </nav>

  );
}
export default NavBar;