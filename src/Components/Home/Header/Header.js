import React, { Component } from "react";
import "../Header/Header.css";

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className="HeaderSection">
                    <div className="headerImage">
                        <div id="home" className="headerInfo">
                            <h1>Web App Design and Development</h1>
                            <p>Specialiazed in the thinking process of web design and development for the wide variety of industries. If you are interested in my work please feel free to contact me</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;