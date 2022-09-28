import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='container'>
            <hr />
            <footer className='footer'>
                <div className='row__1'>
                    <ul>
                        <h4>Questions? Contact us.</h4>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className='row__1'>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div className='row__1'>
                    <ul>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Only on Netflix</li>
                    </ul>
                </div>
                <div className='row__1'>
                    <ul>
                        <li>Media Center</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>

                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer