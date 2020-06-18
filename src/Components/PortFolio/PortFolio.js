import React from "react";
import "../PortFolio/PortFolio.css";
import WebsiteInfo from "../PortFolio/PortFolio.json";


class PortFolio extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section className="PortFolioHeader">
                    <a href="#portfolio">
                        <div className="title-container">
                            <h1 className="title">Explore My Websites</h1>
                        </div>
                    </a>
                    <div className="imageContainer"></div>
                </section>
                <article id="portfolio" className="portFolio">
                <h1>Portfolio</h1>
                    {WebsiteInfo.items.map(item => (
                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe width="460" height="315" src={item.url} frameborder="0" allowfullscreen>.</iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <div className="gitHubBtn-div">
                                    <a href={item.gitHub} target="_blank" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                    <a href={item.url} target="_blank" className="btn">{item.visitButton}</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                    </article>
            </React.Fragment>
        )
    }
}

export default PortFolio;