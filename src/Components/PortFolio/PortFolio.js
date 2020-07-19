import React from "react";
import "../PortFolio/PortFolio.css";


class PortFolio extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section className="PortFolioHeader">
                    <a href="#portfolio">
                        <div className="title-container">
                            <h1 className="title">Explore My Work</h1>
                        </div>
                    </a>
                    <div className="imageContainer"></div>
                </section>
                <article id="portfolio" className="portFolio">
                    <h1 className="websiteSectionTitle">Portfolio</h1>
                    <section className="grid-container">

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-todo-list.netlify.app/" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>To DO List App</h2>
                                    <p>Created basic app in the Road to Hire Program, and it helps with organizing daily tasks</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/to-do-list-app" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-todo-list.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-friends-list.netlify.app/" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Friends List App</h2>
                                    <p>Designed and developed cards that will give you a list of friends that you can decided to delete whenever you want</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/FriendsList" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-friends-list.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-tictactoe.netlify.app/" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Tic Tac Toe Game</h2>
                                    <p>Fun tic tac toe game with dynamic color changing functionality. You can play this with your friends and family</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/TicTacToe" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-tictactoe.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://speechrecognition-game.netlify.app/" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Speech Recognition Guessing Game</h2>
                                    <p>Modern  guessing game with speech recognition feature</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/GuessingGame" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://speechrecognition-game.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-ecommerce.netlify.app/" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Ecommerce Website</h2>
                                    <p>React Based website focused on selling dolphin products</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/eCommerceWebsite" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://animated-navbar.netlify.app/" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Animated Navbar</h2>
                                    <p>Navbar specifically designed and developed for animation websites as well as for responsive apps</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/AnimatedNavbar" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://animated-navbar.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-hotel-app.netlify.app/index.html" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Hotel App</h2>
                                    <p>Very informative and organized hotel app with pictures and a variety of icon designs.</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/HotelApp" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-hotel-app.netlify.app/index.html" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-react-github-cards.netlify.app" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>GitHub User Locator</h2>
                                    <p>Used GitHub API to create an app that will help you locate users based on the database information that I have included in my code.</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/react-github-cards" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-react-github-cards.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://gatewaywebsite.netlify.app" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Gateway Website</h2>
                                    <p>The very first application that I created when I started the Road to Hire Code Academy. It includes information about the country, Honduras</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/gatewayProject" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://gatewaywebsite.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://darwin-counter-app.netlify.app" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Counter App</h2>
                                    <p>Fun and counter app, with reset button that helps you start counting over again.</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/counterApp" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div">
                                        <a href="https://darwin-counter-app.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://vgkits.org/blog/wp-content/uploads/2018/05/basics-terminal-command-screenshot.jpg" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Pokemon Inquirer</h2>
                                    <p>This is a very interesting node application, where you are able to train a pokemon of your choice. If you would like to see it in action, clone my GitHub Repo and run it in Terminal.</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/PokemonInquirer" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div-2">
                                        <p>Visit Repo --></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="website-flex-container">
                            <div className="laptop-frame">
                                <div>
                                    <iframe title="My Websites" width="460" height="315" src="https://static.vecteezy.com/system/resources/previews/000/366/724/non_2x/vector-a-sunny-weather-condition.jpg" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="websiteInfo">
                                <div>
                                    <h2>Weather App</h2>
                                    <p>Used a third party API to create this innovative app where you are able to get the current weather of a city of your choice</p>
                                    <div className="gitHubBtn-div">
                                        <a href="https://github.com/DarwinBueso01/gatewayProject" target="_blank" rel="noopener noreferrer" className="gitHubBtn">GitHub <i className="fa fa-github"></i></a>
                                    </div>
                                    <div className="zoom-div-2">
                                        <p>Visit Repo --></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </article>
            </React.Fragment>
        )
    }
}

export default PortFolio;