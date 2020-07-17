import React  from "react";
import "../Footer/Footer.css";

class Footer extends React.Component{
    render() {
        return(
            <React.Fragment>
                <section className="footerContainer">
                    <footer className="footer">
                        <div className="socialMedias">
                            <h2 className="footerH2">Social Medias</h2>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/darwin-bueso-galdamez-6a73661a9/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100009827972169" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a href="https://www.instagram.com/darwin02504/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li><a href="https://twitter.com/DarwinGaldamez9" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            </ul>
                        </div>
                        <div className="contactInfo">
                            <h2 className="footerH2">Contact Information</h2>
                            <ul>
                                <li><a href="mailto:darwingaldamez5@gmail.com">darwingaldamez5@gmail.com</a></li>
                                <li><a href="sms:980-208-7723">(980) 208-7723</a></li>
                                <li><a href="#contact">Contact Me</a></li>
                            </ul>
                        </div>
                        <div className="links">
                            <h2 className="footerH2">Important Links</h2>
                            <ul>
                                <li><a href="https://github.com/DarwinBueso01" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="#aboutMe">About Me</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#navbar">Scroll Up</a></li>
                            </ul>
                        </div>
                    </footer>
                    <p className="copyright">Darwin Bueso Galdamez &copy; 2020 All Rights Reserved</p>
                </section>
            </React.Fragment>
        )
    }
}

export default Footer;