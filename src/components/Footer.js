import React from "react"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logos">
               <img src="./images/logo2.svg" className="img-logo"/>
                <div className="socials-logo">
                    <img src="./images/icon-facebook.svg" className="socials"/>
                    <img src="./images/icon-youtube.svg"className="socials"/>
                    <img src="./images/icon-twitter.svg"className="socials"/>
                    <img src="./images/icon-pinterest.svg"className="socials"/>
                    <img src="./images/icon-instagram.svg"className="socials"/>
                </div>
            </div>
            <div>
                <ul className="list">
                    <div className="list-left">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </div>
                    <div className="list-right">
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </div>
                </ul>
            </div>
            <div className="btn-text">
               <button className="btn-req">Request Invite</button>
               <h5>© Easybank. All Rights Reserved</h5>
            </div>
            
        </div>
        
    )
}