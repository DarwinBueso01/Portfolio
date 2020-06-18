import React from "react";
import "../Contact/Contact.css";


class Contact extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <section className="contactForm">
                    <div className="formColor">
                        <div>
                            <h2>My Personal Information</h2>
                            <h3>(980) 208-7723</h3>
                            <h3>darwingaldamez5@gmail.com</h3>
                            <h3>6008 Corktree Court</h3>
                        </div>
                    </div>
                    <div className="container">
                        <form>
                            <label for="fname">First Name</label>
                            <input type="text" className="fname" name="firstname" placeholder="Your name.." required/>

                            <label for="lname">Last Name</label>
                            <input type="text" className="lname" name="lastname" placeholder="Your last name.." required/>

                            <label for="email">Email</label>
                            <input type="text" className="email" name="email" placeholder="Your email.." required/>

                            <label for="subject">Message</label>
                            <textarea className="subject" name="subject" cols="30" rows="10" placeholder="Write something.."></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
            </section>
            </div>
            </React.Fragment>
        )
    }
}

export default Contact;