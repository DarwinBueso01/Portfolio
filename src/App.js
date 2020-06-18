import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Home/Header/Header";
import HomeInfo from "./Components/Home/HomeInfo/Home";
import PortFolio from "./Components/PortFolio/PortFolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Header />
      <HomeInfo />
      <PortFolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
