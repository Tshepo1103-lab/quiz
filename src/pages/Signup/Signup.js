import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [name, setFirstName] = useState("");
    const [surname, setLastName] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [userName, setUsername] = useState(""); // Updated variable name
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const history = useNavigate();

    async function register(e) {
        e.preventDefault();

        try {
            const item = { name, surname, emailAddress, userName, password, isActive: true, roleNames: ["admin"] };
            console.log(item);

            
            const result = await fetch("https://localhost:44311/api/services/app/User/Create", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": ' text/plain',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBhc3BuZXRib2lsZXJwbGF0ZS5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjNkZTI0OTY3LTE5ZTYtYjRlYy0zYzk4LTNhMTBmODFiNjJlMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6ImQyYWQ5ZmMxLWE0NmQtNDhmMS04MmM5LTQ5ZGM2ZGVhZGJjOCIsImlhdCI6MTcwOTAxODkxNSwibmJmIjoxNzA5MDE4OTE1LCJleHAiOjE3MDkxMDUzMTUsImlzcyI6IlF1aXpUIiwiYXVkIjoiUXVpelQifQ.zjNjexrykb-wcZV5_fC5RG8vJZedlzRnV_wLGeLw1ig",
                    "X-XSRF-TOKEN": "CfDJ8HvO9AQhr8xDsKoyCb4dLjH07GNZK9td4Vgog99Lt5WqgVEVP8zY-eUarHDVG1cWDYMxGgD_JOYSr-yPuhlysxfqTKfqaEmcaCWeJjAX5ngMRIMIauH8HN3eKtRKBvs3SamPnpB-ko_x9V8M1ATJ7H3vM_7xqaC63FcD2estvR3pbH550RURUQnmgeXDxWbPZA"
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
            setError("Registration failed. Please check your input and try again.");
        }
    }

    return (
        <div className='Sign-Up'>
            <div className='containerLogin'>

                <form onSubmit={register}>

                    <h2 className='SignUpHeader'>Register<img src="./img/Logo.jpg" alt="Company Logo" className='imgUp' /></h2>

                    {error && <p className="error-message">{error}</p>}
                    <input onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname" type='text' id='firstname' />
                    <input onChange={(e) => setLastName(e.target.value)} placeholder="Lastname" type='text' id='lastname' />
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type='text' id='email' />
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type='text' id='username' />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type='password' id='password' />
                    <button type='submit'>Register</button>
                    <span><a href="/Login">Login</a></span>
                </form>

            </div>
        </div>
    );
}

export default SignUp;