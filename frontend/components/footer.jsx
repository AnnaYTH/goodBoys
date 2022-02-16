import React from 'react';

const Footer = () => {
    return (
        <div className='footer'> 
            <div className='footer-company'> 
                <h1>TECHNOLOGY</h1>
                <p>Ruby on Rails, Javascript</p>
                <p>React, Redux</p>
                <p>HTML, CSS</p>
                <p>Amazon Web Services</p>
            </div>

            <div className='footer-work'>
                <h1>WORK WITH ME </h1>
                <div className='socials'>
                    <a href="https://github.com/AnnaYTH" target="_blank" className="fa fa-github"></a>

                    <a href="https://angel.co/u/anna-trott-herdrich" target="_blank" className="fa-brands fa fa-angellist"> </a>

                    <a href="https://annayth.github.io/" target="_blank" class="fa-solid fa fa-dragon">
                </a>
                </div>
            </div>

            <div className='footer-connect'>
                <h1>CONNECT</h1>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/annatrottherdrich/" target="_blank" className="fa fa-linkedin"></a>

                    <a href="https://www.goodreads.com/user/show/5722666-anna-trott-herdrich" target="_blank" class="fa-brands fa fa-goodreads"></a>

                    <a href="https://www.instagram.com/roaringdragonite/?hl=en" target="_blank" class="fa fa-instagram"> </a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer; 