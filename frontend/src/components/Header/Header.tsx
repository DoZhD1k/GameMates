import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <Link to="/" className="logo">
        GamerLink
      </Link>
      <nav className="navigation">
        <Link
          to="/AdminstratorPanelControll/DashboardHomePage"
          className="nav-link"
        >
          DashBoard
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/chat" className="nav-link">
          Chat
        </Link>
        <Link to="/eye" className="nav-link">
          Eye Training
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/faqs" className="nav-link">
          FAQs
        </Link>
        {isLoggedIn ? (
          <Link to="/profile">
            <button className="btnLogin-popup">Profile</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btnLogin-popup">Profile</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
