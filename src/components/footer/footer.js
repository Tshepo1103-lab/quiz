import React from 'react';
import { GoogleOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import './footer.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />


function Footer() {
    return (
        
        <div className="footer-container">
            <div className="quiz-box">
            <h2>QuizBox</h2>
            </div>
            <div className="main-footer-container">
                <h3>Follow us</h3>
                <ul>
                    <li><GoogleOutlined /></li>
                    <li><FacebookOutlined /></li>
                    <li><InstagramOutlined /></li>
                </ul>
            </div>  
        </div>
    );
}

export default Footer;
