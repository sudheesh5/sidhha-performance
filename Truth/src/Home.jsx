import React, { useState } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import Untoldpodcast from "./Untoldpodcast";
import Direct_truth from "./Direct_truth";
import Sidhha_arrivals from "./Sidhha_arrivals";
import Contact from "./Contact";
import Private_discourses from "./Private_discourses";
import About from "./About";
import Sidebar from "./Sidebar";
import "./components/css/Style.css";
import Discourses from './Discourses'; 
import SecretWritings from './SecretWritings'; // Import SecretWritings component
import Books from './Books'; 
import img3 from "./components/images/iceberg4.jpg";
import Revelations from "./Revelations";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Discourses />);

const handleItemClick = (itemName) => {
  switch (itemName) {
    case 'DISCOURSES':
      setSelectedComponent(<Discourses />);
      break;
    case 'THE SECRET WRITINGS':
      setSelectedComponent(<SecretWritings />);
      break;
    case 'BOOKS':
      setSelectedComponent(<Books />);
      break;
      case 'UNTOLD SECRETS PODCAST':
      setSelectedComponent(<Untoldpodcast />);
      break;
      case 'REVELATIONS OF TRUTH':
      setSelectedComponent(<Revelations />);
      break;
      case 'ABOUT':
      setSelectedComponent(<About />);
      break;
      case 'CONTACT':
      setSelectedComponent(<Contact />);
      break;
      case 'PRIVATE DISCOURSES AND SIDDHA SCROLLS':
      setSelectedComponent(<Private_discourses />);
      break;
      case 'DIRECT TRUTH PODCASTS':
      setSelectedComponent(<Direct_truth />);
      break;
      case 'THE SIDDHA ARRIVALS':
      setSelectedComponent(<Sidhha_arrivals />);
      break;
    default:
      setSelectedComponent(null);
      break;
  }
};

  return (
    <div>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cardo:ital,wght@0,400;0,700;1,400&family=Playwrite+FR+Trad&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playwrite+FR+Trad&display=swap');
        `}
      </style>
      <div className="image-container">
        <img src={img3} id="background" alt="background image" />
        <div className="overlay-text">
          <h1 className="main-head">SIDDHA PERFORMANCE</h1>
          <h2 className="sub-head">Conquering The Mind</h2>
        </div>
      </div>

      <div id="navbar">
        <br />
        <ul className="list">
            <li onClick={() => handleItemClick('DISCOURSES')}>DISCOURSES</li>
            <li onClick={() => handleItemClick('THE SECRET WRITINGS')}>THE SECRET WRITINGS</li>
            <li onClick={() => handleItemClick('BOOKS')}>BOOKS</li>
            <li onClick={() => handleItemClick('UNTOLD SECRETS PODCAST')}>UNTOLD SECRETS PODCAST</li>
            <li onClick={() => handleItemClick('DIRECT TRUTH PODCASTS')}>DIRECT TRUTH PODCASTS</li>
            <li onClick={() => handleItemClick('THE SIDDHA ARRIVALS')}>THE SIDDHA ARRIVALS</li>
          </ul>

        <ul className="list">
        <li onClick={() => handleItemClick('REVELATIONS OF TRUTH')}>REVELATIONS OF TRUTH</li>
        <li onClick={() => handleItemClick('PRIVATE DISCOURSES AND SIDDHA SCROLLS')}>PRIVATE DISCOURSES AND SIDDHA SCROLLS</li>
        <li onClick={() => handleItemClick('ABOUT')}>ABOUT</li>
        <li onClick={() => handleItemClick('CONTACT')}>CONTACT</li>
        </ul>
      </div>

      <Sidebar/>
      <div className="selected-component">
      {selectedComponent} </div>
          
       
    </div>
  );
};

export default Home;