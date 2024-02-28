import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="main-footer-container">
                <ul>
                    <li><img src="./img/google.png" alt="Googlepic"/></li>
                    <li><img src="./img/facebook.png" alt="Googlepic"/></li>
                    <li><img src="./img/instagram.png" alt="Googlepic"/></li>
                    <li><h3 className="footer-header">QuizBox</h3></li>
                    
                </ul>
                
            </div>
        </div>
    );
}

export default Footer;