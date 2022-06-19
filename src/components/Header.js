import React from "react";

export default function Header(){
    return(
        <header className="header">
                    
                        <img src="./images/logo.svg" className="img-logo"/>
                    <div className="navbar">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                                <span className="bar"></span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">About</a>
                                <span className="bar"></span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Contact</a>
                                <span className="bar"></span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Blog</a>
                                <span className="bar"></span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Careers</a>
                                <span className="bar"></span>
                            </li>
                        </ul>
                        <button className="btn-req">Request Invite</button>
                    </div>
                    <div class="hamburger">
                                <img src="./images/icon-hamburger.svg"/>
                    </div>
        </header>
    )
}
