import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/context';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'antd';
import './Signup.css';

function SignUp() {
    const { register } = useContext(AuthContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const makeRegister = (e) => {
        e.preventDefault();

        if (username.length > 0) {
            register({
                username,
                password,
                name: firstName,    // Use firstName and lastName instead of name and surname
                surname: lastName,
                email
            })
            .then((response) => {
                if (!response) {
                    setError("Failed to register. Please try again."); // Set a generic error message
                    console.log(error);
                } else {
                    navigate('/Login'); // Navigate to login page upon successful registration
                }
            });
        }
    };

    return (
        <div className='Sign-Up'>
            <div className='containerLogin'>
                <form onSubmit={makeRegister}>
                    <h2 className='SignUpHeader'>Register<img src="./img/Logo.jpg" alt="Alternate Text" className='imgLogin' /></h2>
                    {error && <Alert message={error} type="error" />} {/* Show error message if present */}
                    <input onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" type='text' id='firstname' />
                    <input onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" type='text' id='lastname' />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type='text' id='email' />
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type='text' id='username' />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type='password' id='password' />
                    <button className='buttonSignup' type="submit">Register</button>
                    <span><a href="/">Login</a></span>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
