import React from "react";

export default function Header(){
    return(
        <header className="header">
                    <nav className="navbar">
                        <img src="./images/logo.svg" className="img-logo"/>
                        
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Careers</a>
                            </li>
                        </ul>
                        <button className="btn-req">Request Invite</button>
                        <div class="hamburger">
                                <img src="./images/icon-hamburger.svg"/>
                        </div>
                    </nav>
        </header>
    )
}