import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Clapperboard,
  Columns3,
  Trophy,
  Menu,
  Info,
  X,
} from "lucide-react";
import "./Styles/SideNavbar.css"; // Import the external CSS file

const SideNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Function to handle scrolling to top
  const handleHomeClick = () => {
    if (location.pathname === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button (Only visible on mobile & tablet) */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="menu-icon" />
        ) : (
          <Menu className="menu-icon" />
        )}
      </button>

      {/* Sidebar Container */}
      <div
        className={`sidebar ${isExpanded ? "expanded" : ""} ${
          isMobileOpen ? "mobile-open" : ""
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <nav className="nav-links">
          <Link to="/home" className="nav-item" onClick={handleHomeClick}>
            <Home className="nav-icon" />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/Error404" className="nav-item">
            <Clapperboard className="nav-icon" />
            <span className="nav-text">Movies</span>
          </Link>
          <Link to="/Error404" className="nav-item">
            <Columns3 className="nav-icon" />
            <span className="nav-text">Series</span>
          </Link>
          <Link to="/Error404" className="nav-item">
            <Trophy className="nav-icon" />
            <span className="nav-text">Sports</span>
          </Link>
          <Link to="/information" className="nav-item">
            <Info className="nav-icon" />
            <span className="nav-text">Info</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideNavbar;
