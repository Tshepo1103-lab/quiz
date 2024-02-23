import React from 'react';
import './Signup.css';
import Footer from '../../components/footer/footer';
// import {Link} from 'react-router-dom';

function SignUp(){
    return(
        <div className='containerLogin'>
        <form> 
            
            <h2>Register<img src="./img/Logo.jpg" alt="Alternate Text"/></h2>
            <input placeholder="username" type='text' id='username' />
            <input placeholder="password" type='password' id='password' />
            <input placeholder="confirm password" type='password' id='password' />
            <button type='submit'>Register</button>
            <span><a href="/">Login</a></span>
            
        </form>
        <Footer/>
       </div>
    );
}
export default SignUp;
