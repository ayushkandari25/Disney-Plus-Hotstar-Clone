import React from "react";
import "./Styles/About.css";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About the Disney+ Hotstar Clone</h1>
        <p className="about-description">
          Welcome to the Disney+ Coldstar Clone project! This web application is
          a clone of the popular streaming platform Disney+ Hotstar. It was
          built as part of a construct week project to demonstrate frontend
          development skills using <strong>React.js</strong> and
          <strong> HTML, CSS</strong>.
        </p>

        <h2 className="about-subtitle">Limitations & Future Improvements</h2>
        <p className="about-description">
          Since this project was built within a limited timeframe, some advanced
          features like full-fledged backend, premium content streaming, and
          dynamic search filters were not implemented. However, these can be
          added in future updates.
        </p>

        <h2 className="about-subtitle">Apologies & Disclaimer</h2>
        <p className="about-description">
          This project is for learning purposes only and does not replicate the
          exact functionality of Disney+ Hotstar. It was built as a practice
          project, and I apologize for any missing features or functionalities.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/home" className="home-button">
        Return Home
      </Link>
    </div>
  );
};

export default About;
