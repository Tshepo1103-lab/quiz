import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/context';
import { Alert } from 'antd';
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { user, login } = useContext(AuthContext);

  const ErrorLogin = () => {
    return <Alert message="Invalid username or password" type="error" />;
  };

  const makeLogin = (e) => {
    e.preventDefault();

    if (username.length > 0) {
      login({
        username,
        password
      })
        .then((response) => {
          if (!response) {
            setError("Invalid username or password");
            console.log(error);
          }
        });
    }
  };

  return (
    <div className='containerLogin'>
      {user.id !== 0 ?
        navigate('/')
        :
        (
          <form className='formSignin' onSubmit={makeLogin}>
            <h2 className='SignInHeader'>Login<img src="./img/Logo.jpg" alt="Alternate Text" className='imgLogin' /></h2>
            {error && <ErrorLogin />} {/* Conditionally render the error message */}
            <input className="inputSignin" id="username" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className="inputSignin" id="username" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='buttonSignin' type="submit">Login</button>
            <Link to="/signup" className='custom-link'><span>Don't have an account? Sign up here.</span></Link>
          </form>
        )}
    </div>
  );
}

export default Login;
