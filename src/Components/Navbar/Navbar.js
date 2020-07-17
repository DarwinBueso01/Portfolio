import React from "react";
import "../Navbar/Navbar.css";

class Navbar extends React.Component{
    render() {
        return(
            <div className="nav-wrapping-div">
                <nav id="navbar">
                    <div className="container1">
                        <h1 className="logo">Darwin Bueso Galdamez</h1>
                        <ul className="nav-Ul">
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#aboutMe">About Me</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
