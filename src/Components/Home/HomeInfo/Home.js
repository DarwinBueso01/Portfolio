import React from "react";
import "../HomeInfo/Home.css";

class HomeInfo extends React.Component {
    render(){
        return(
            <React.Fragment>
                <section className="mySection">
                    <div className="myPhoto"></div>
                    <div className="myInfo">
                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                        <h1>Hello World, I am Darwin</h1>
                        <p>I am a 18 years old Junior web developer with a demonstrated history of working in the tech industry. I was born and raised in Honduras and currently living in Charlotte NC. My passion for coding started when I was in the Road to Hire after school program, where I started creating basic html and css practice websites. Currently I am attending the traditional Road to Hire six month program, and looking forward to keep growing in the tech field.</p>
                    </div>
                </section>
                <section className="icons-container">
                    <div>
                        <i className="fa fa-paint-brush"></i>
                        <p>Design thinking process, wireframing, sitemaping</p>
                    </div>
                    <div>
                        <i className="fa fa-code"></i>
                        <p>I work with the following laguages: HTML, CSS, JavaScript, React, Node, MySQL</p>
                    </div>
                    <div>
                        <i className="fa fa-cloud-upload"></i>
                        <p>Experienced in cloud, website and app deployment.</p>
                    </div>
                </section>
                <section className="pictureSection">
                    <div>
                        <h2>Experienced in ...</h2>
                    </div>
                    <section className="photoGallery">
                        <div className="effect-container">
                            <img className="photos" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Front End" />
                            <div className="middle">
                                <div className="text">Front End</div>
                            </div>
                        </div>
                            <div className="effect-container">
                            <img className="photos" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80" alt="Back End" />
                            <div className="middle">
                                <div className="text">Back End</div>
                            </div>
                        </div>
                        <div className="effect-container">
                            <img className="photos" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Full Stack" />
                            <div className="middle">
                                <div className="text">Full Stack</div>
                            </div>
                        </div>
                   </section>
                </section>
            </React.Fragment>
        )
    }
}

export default HomeInfo;