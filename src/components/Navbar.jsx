import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <a href="#">For Individual</a>
        </li>
        <li>
          <a href="#">For Business</a>
        </li>
        <li>
          <a href="#">For University</a>
        </li>
        <li className="dropdown-container">
          <div
            className="dropdown-trigger"
            onMouseEnter={() => setShowCard(true)}
            onMouseLeave={() => setShowCard(false)}
          >
            <a href="#">For Partnered Learning Programs</a>
            {showCard && (
              <div className="info-card">
                <p>Enhance learning with</p>
                <p>Strategic partnerships.</p>
                <p>Custom programs.</p>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
