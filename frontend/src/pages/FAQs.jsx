import React from "react";
import "./CSS/other.css";
import { Link } from "react-router-dom";

const FAQs = () => {
  return (
    <div className="faqs-body">
      <div className="faqs-main">
        <h1 className="faqs-heading">Frequently Asked Questions</h1>

        <div className="faqs-question">
          <h2 className="faqs-question-heading">
            What games does your platform support?
          </h2>
          <p className="faqs-answer">
            Our platform supports a variety of online games, including Valorant,
            CS:GO, PUBG, Fortnite, Overwatch, and more. You can use our filters
            to find a gaming partner for your favorite game.
          </p>
        </div>

        <div className="faqs-question">
          <h2 className="faqs-question-heading">
            How can I find a gaming partner?
          </h2>
          <p className="faqs-answer">
            To find a gaming partner, use our filters on the homepage. You can
            filter by age, language, microphone availability, rank, and game
            modes. Once you apply the filters, browse through the profiles and
            connect with potential gaming partners.
          </p>
        </div>

        <div className="faqs-question">
          <h2 className="faqs-question-heading">
            Is your platform free to use?
          </h2>
          <p className="faqs-answer">
            Yes, our platform is free to use. You can create a profile, search
            for gaming partners, and connect with other players without any
            cost.
          </p>
        </div>

        <div className="faqs-button-container">
          <Link to="/" className="faqs-button">
            Home
          </Link>
          <Link to="/about" className="faqs-button">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
