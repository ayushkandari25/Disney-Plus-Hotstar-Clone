import React from "react";
import { Github, Mail, Copyright, Linkedin, Smile } from "lucide-react";
import "./Styles/Footer.css"; // Importing the separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">Connect with Us</h3>

      <div className="footer-icons">
        <a
          href="https://github.com/ayushkandari25"
          target="_blank"
          className="footer-link github"
        >
          <Github size={24} />
        </a>
        <a href="mailto:ayush25.kandari@gmail.com" className="footer-link mail">
          <Mail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayushkandari"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link linkedin"
        >
          <Linkedin size={24} />
        </a>
      </div>

      <p className="footer-text">
        <Copyright size={18} />
        Created by Ayush Kandari
        <Smile size={12} />
      </p>
    </footer>
  );
};

export default Footer;
