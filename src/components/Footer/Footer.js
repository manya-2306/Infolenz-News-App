import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className='container'>

            <div className="Footernav">

                <h5>ABOUT US</h5>
                <h5>AWARDS</h5>
                <h5>HELP</h5>

                <div className="contact">

                    <h5>CONTACT US</h5>
                    <a href="">abcd.gmail.com</a>
                    <a href="">9811503262</a>
                </div>

                <div className="socials">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

            <div className='legal  '>
            <p>© all rights reserved</p>
            <p>
                made with <i className='fa fa-heart'></i> by gorkhcoder
            </p>
            </div>

            </div>
        </div>      
   
    </>
  )
}

export default Footer