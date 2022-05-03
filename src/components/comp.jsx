import React from "react";
import logo from "../images/reactLogo.png";
function Navbar(){
    return(
        <nav className="nav">
            <div className="logo">
                <img className="reactlogo" src={logo} alt="" />
                <h1 className="react_facts">ReactFacts</h1>
            </div>
            <h3 className="navDesc">React Course-Project 1</h3>
        </nav>
    );
}

function Main(){
    return(
        <div className="main">
            <h1 className="facts">Fun Facts about React</h1>
            <ul className="list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

export {Navbar, Main};