import React from "react";
import "./CSS/other.css";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div className="about-body">
      <div className="about-main">
        <h1 className="about-heading">WHO WE ARE</h1>
        <p>
          Welcome to our gaming community! We are passionate about connecting
          gamers and helping them find the perfect teammates for online games
          such as Valorant, CS:GO, PUBG, Fortnite, Overwatch, and more.
        </p>
        <h2 className="about-heading">Our Mission</h2>
        <p>
          Our mission is to create a platform that simplifies the process of
          finding gaming partners. We understand the importance of teamwork and
          aim to provide a space where players can easily connect, communicate,
          and enjoy a seamless gaming experience together.
        </p>
        <div className="about-btn-div">
          <Link to="/" className="about-button">
            Home
          </Link>
          <Link to="/faqs" className="about-button">
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
