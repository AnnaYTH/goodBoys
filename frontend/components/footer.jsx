import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'> 
            <div className='footer-company'> COMPANY </div>
            <div className='footer-work'> WORK WITH ME </div>
            <div className='footer-connect'> CONNECT
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/annatrottherdrich/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://github.com/AnnaYTH" target="_blank" className="fa fa-github"></a>
                    <a href="https://www.instagram.com/roaringdragonite/?hl=en" target="_blank" className="fa fa-instagram">
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer; 