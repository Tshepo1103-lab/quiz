import React, { useState } from 'react';
import './Signup.css';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setFirstName] = useState("");
    const [surname, setLastName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [UserName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();


    return (
        <div className='Sign-Up'>
            <div className='containerLogin'>
                <form onSubmit={SignUp}>

                    <h2 className='SignUpHeader'>Register<img src="./img/Logo.jpg" alt="Alternate Text" className='imgUp' /></h2>
                    <input onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname" type='text' id='firstname' />
                    <input onChange={(e) => setLastName(e.target.value)} placeholder="Lastname" type='text' id='lastname' />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type='text' id='email' />
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="username" type='text' id='username' />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type='password' id='password' />
                    <button type='submit'>Register</button>
                    <span><a href="/">Login</a></span>

                </form>
                <Footer />
            </div>
        </div>
    );
}

export default SignUp;