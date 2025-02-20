import React from "react";
import "./Styles/Error404.css";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="astronaut">🧑‍🚀</div>
        <div className="error-code">404</div>
        <div className="error-message">Houston, we have a problem!</div>
        <p className="error-description">
          The page you're looking for has floated off into space. Don't worry
          though, you can always return to safety by clicking the button below.
        </p>
        <Link to="/home" className="home-button">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
