import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/context';
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { user, login } = useContext(AuthContext);

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
        navigate('/', { state: { name: username } })

       : (
        <form className='formSignin' onSubmit={makeLogin}>
          <h2 className='SignInHeader'>Login<img src="./img/Logo.jpg" alt="Alternate Text" className='imgLogin'/></h2>
          <input id="username" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input id="username" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='buttonSignin' type="submit">Login</button>
          {/* Pass the 'name' prop to the Dashboard component */}
          <Link to="/signup" className='custom-link'><span>Don't have an account? Sign up here.</span></Link>
        </form>
      )}
    </div>
  );
}

export default Login;
