import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthAction, useAuthState } from '../../providers/AuthProvider'; // Update with the correct path

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated } = useAuthState();
  const { loginUser} = useAuthAction();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      // Call the loginUser function provided by the context
      await loginUser({ username, password });

      // The loginUser function should handle authentication, so you can check isAuthenticated if needed
      if (isAuthenticated) {
        // User is authenticated, handle the logic (redirect, etc.)
        console.log("User is authenticated");
      } else {
        // Authentication failed
        console.log("Authentication failed");
      }

    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      {/* Your login form */}
      <form onSubmit={signIn}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <Link to="/signup">Don't have an account? Sign up here.</Link>
    </div>
  );
}

export default Login;
