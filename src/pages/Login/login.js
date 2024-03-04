import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/context';
import { Alert } from 'antd';
import "./login.css";

// Component to Login
function Login() {
  // Used to navigate on success
  const navigate = useNavigate();

  // Declaring the state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { user, login } = useContext(AuthContext);

  // Function that will trigger if there is an error
  const ErrorLogin = () => {
    return <Alert message={error} type="error" />;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate('/dashboard', { replace: true });
    }
  });

  // onSubmit function
  const makeLogin = (e) => {
    e.preventDefault();
    // Checks if the user provided credentials
    if (username.length > 0 && password.length > 0) {
      login({
        username,
        password
      })
        .then((data) => {
          localStorage.setItem('token', data.result.accessToken);
        })
        .catch((error) => {
          setError("Invalid username or password");
          console.log(error);
        });
    }
  };

  return (
    <div className='containerLogin'>
      <form className='formSignin' onSubmit={makeLogin}>
        <h2 className='SignInHeader'>Login<img src="./img/Logo.jpg" alt="Alternate Text" className='imgLogin' /></h2>
        {error && <ErrorLogin />}
        <input className="inputSignin" id="username" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="inputSignin" id="username" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='buttonSignin' type="submit">Login</button>
        <Link to="/signup" className='custom-link'><span>Don't have an account? Sign up here.</span></Link>
      </form>
    </div>
  );
}

export default Login;
