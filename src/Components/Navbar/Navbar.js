import React from "react";
import "../Navbar/Navbar.css";

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <nav id="navbar">
                    <div class="container1">
                        <h1 class="logo">Darwin Bueso Galdamez</h1>
                        <ul>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#home">Home</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
