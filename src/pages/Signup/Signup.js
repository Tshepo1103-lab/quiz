import React, { useState } from 'react';
import './Signup.css';
import Footer from '../../components/footer/footer';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setFirstName] = useState("");
    const [surname, setLastName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function register(e) {
        e.preventDefault();

        try {
            const item = {
                name,
                surname,
                emailAddress,
                userName,
                password,
                isActive: true,
                roleNames: ["admin"]
            };

            const result = await fetch("https://localhost:44311/api/services/app/User/Create", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'text/plain',
                    "Authorization": "Bearer your_token_here",
                    "X-XSRF-TOKEN": "your_xsrf_token_here"
                }
            });

            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            const data = await result.json();
            localStorage.setItem("user-info", JSON.stringify(data));
            history("/Login");

        } catch (error) {
            console.error("Error during signup:", error);
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
                <Footer />
            </div>
        </div>
    );
}

export default SignUp;