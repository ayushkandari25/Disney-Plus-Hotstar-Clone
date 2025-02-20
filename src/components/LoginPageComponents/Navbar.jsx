import React, { useEffect, useState } from "react";
import { signInWithGoogle, logOut, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./Styles/Navbar.css"; // Importing the CSS file

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Icon.png" alt="Disney+ Hotstar" className="logo" />
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="welcome-text">WELCOME, {user.displayName}</span>
            <button
              onClick={() => {
                logOut();
                navigate("/");
              }}
              className="auth-button logout-button"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="language-dropdown">
              <select className="language-select">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>
            <button
              onClick={async () => {
                await signInWithGoogle();
                navigate("/home");
              }}
              className="auth-button login-button"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
