import React from 'react';

const Footer = () => {
    return (
        <div className='footer'> 
            <div className='footer-company'> 
                <h1>COMPANY</h1>
                <p>You don't really need company</p>
                <p>You have me</p>
                <p>I am all you will ever need</p>
            </div>

            <div className='footer-work'>
                <h1>WORK WITH ME </h1>
                <p>This is not a joke</p>
                <p>Someone please</p>
                <p>Hire me</p>
            </div>

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