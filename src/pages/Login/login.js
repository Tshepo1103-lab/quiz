import React from 'react';
import './login.css';
import Footer from '../../components/footer/footer';
import {Link} from 'react-router-dom';

function Login(){
    return(
        <div className='containerLogin'>
        <form> 
            
            <h2>Login<img src="./img/Logo.jpg" alt="Alternate Text"/></h2>
            <input placeholder="username" type='text' id='username' />
            <input placeholder="password" type='password' id='password' />
            <Link to="/"><button type='submit'>Login</button></Link>
            <span><a href="/">Register now</a></span>
        </form>
        <Footer/>
       </div>
    );
}
export default Login;