import React from "react";
import "../Contact/Contact.css";


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", message: "" };
      }
       /* Here’s bit for posting the form submission */

       handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

        e.preventDefault();
      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { email, message } = this.state;
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
                        <form onSubmit={this.handleSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="contact" value="contact"></input>

                            <label htmlFor="fname">First Name</label>
                            <input type="text" className="fname" id="fname" name="firstname" placeholder="Your name.." onChange={this.handleChange} required />

                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className="lname" id="lname" name="lastname" placeholder="Your last name.." onChange={this.handleChange}  required />

                            <label htmlFor="mail">Email</label>
                            <input type="text" className="email" name="email" placeholder="Your email.." value={email} onChange={this.handleChange} required />

                            <label htmlFor="subject">Message</label>
                            <textarea className="subject" name="subject" cols="30" rows="10" placeholder="Write something.." id="subject" value={message} onChange={this.handleChange}></textarea>

                            <input type="submit" value="Submit" name="submit" />
                        </form>
                    </div>
            </section>
            </div>
            </React.Fragment>
        )
    }
}

export default Contact;