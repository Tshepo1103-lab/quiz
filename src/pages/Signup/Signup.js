import React, { useState } from 'react';
import './Signup.css';
import { useAuthAction } from '../../providers/AuthProvider'; // Update with the correct path
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setFirstName] = useState('');
    const [surname, setLastName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [UserName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const { createUser } = useAuthAction();

    async function register(e) {
        e.preventDefault();

        try {
            // Call the createUser function provided by the context
            await createUser({ name, surname, emailAddress, UserName, password, isActive: true, roleNames: ["admin"] });

            // Registration successful, redirect to login page
            history('/Login');
        } catch (error) {
            console.error('Error during signup:', error);
            // Handle the error, e.g., show an error message to the user
        }
    }

    return (
        <div className='Sign-Up'>
            <div className='containerLogin'>
                <form onSubmit={register}>
                    <h2 className='SignUpHeader'>Register<img src="./img/Logo.jpg" alt="Alternate Text" className='imgUp' /></h2>
                    <input onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname" type='text' id='firstname' />
                    <input onChange={(e) => setLastName(e.target.value)} placeholder="Lastname" type='text' id='lastname' />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type='text' id='email' />
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type='text' id='username' />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type='password' id='password' />
                    <button type='submit'>Register</button>
                    <span><a href="/">Login</a></span>
                </form>
                {/* You may keep the Footer component if it's necessary */}
            </div>
        </div>
    );
}

export default SignUp;
