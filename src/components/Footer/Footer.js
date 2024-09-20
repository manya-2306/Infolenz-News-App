import React from "react"
import './light-footer.css';
import './dark-footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        < div className='container'>

            <div className="footernav1">

                <div className="info">
                    <a href="">ABOUT US</a>
                    <a href="">AWARDS</a>
                    <a href="">HELP</a>
                    <a href="">CONTACT US</a>
                </div>
                
            </div>

            <div className="footernav2">
                
                <div className="socials">
                    <a href="https://facebook.com" > <FaFacebook  className="social-icon"/> </a>
                    <a href="https://twitter.com"  > <FaTwitter   className="social-icon"/> </a>
                    <a href="https://instagram.com"> <FaInstagram className="social-icon"/> </a>
                </div>

                <div className='legal'>
                    <p>© all rights reserved</p>
                    <p>made with &#10084; at JIIT</p>
                </div>

            </div>

        </div>      
   
    </>
  )
}

export default Footer