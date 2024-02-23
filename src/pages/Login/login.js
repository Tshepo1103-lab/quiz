import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useAuthActionContext, useAuthStateContext } from '../../AuthProvider/index';
import Dashboard from '../../components/dashboard/dashboard';
import Footer from '../../components/footer/footer';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const status = useAuthStateContext(); // Indicates if the user is authenticated
  const { login } = useAuthActionContext(); // Authentication functions

  const submitForm = (e) => {
    e.preventDefault();
    login(username, password);
    setUsername('');
    setPassword('');
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="containerLogin">
      {status.authenticated ? (
        <Dashboard />
      ) : (
        <>
          <form onSubmit={submitForm}>
            <h2>Login</h2>
            <img src="./img/Logo.jpg" alt="Alternate Text" />

            <input
              placeholder="username"
              type="text"
              id="username"
              value={username}
              onChange={changeUsername}
            />
            <input
              placeholder="password"
              type="password"
              id="password"
              value={password}
              onChange={changePassword}
            />
            <button type="submit">Login</button>
            <Link to="/SignUp">
              <span>
                <a href="/SignUp">Register now</a>
              </span>
            </Link>
          </form>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Login;