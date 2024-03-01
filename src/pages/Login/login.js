import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/context';
import "./login.css";
import Dashboard from '../../components/dashboard/dashboard';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { user, login, logout } = useContext(AuthContext);
  console.log("passed down user", user);

  function makeLogin(e) {
    e.preventDefault();
    if (username.length > 0) {
        login({
            username,
            password
        });
    } 
  }

  return (
    <div className='containerLogin'>
      {user.id !== 0 ?
        navigate('/') :
        <form className='formSignin' onSubmit={makeLogin}>
          <h2 className='SignInHeader'>Login<img src="./img/Logo.jpg" alt="Alternate Text" className='imgLogin'/></h2>
          <input id="username" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input id="username" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
          <Link to="/signup" className='custom-link'><span>Don't have an account? Sign up here.</span></Link>
        </form>
      }
    </div>
  );
}

export default Login;
