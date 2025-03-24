import React, { useState } from "react";
import "./Navbar1.css";

function Navbar1() {
  const [showCard, setShowCard] = useState(false);
  const [showhover, setshowhover] = useState(false);
  const skill = [
    { title: "Software", desc: ["HTML", "CSS", "JAVA"] },
    { title: "Electronis", desc: ["Coding", "Java", "JAVA"] },
    { title: "Mechanical", desc: ["Go", "CSS", "JAVA"] },
  ];
  return (
    <nav className="navbar1">
      <div className="logo_sec">
        <div className="logo">
          <div>
            <img src="https://skilldzire.com/images/Logo.svg" alt="skill" />
          </div>
          <div
            className="dropdown-trigger"
            onMouseEnter={() => setShowCard(true)}
            onMouseLeave={() => setShowCard(false)}
          >
            <p>Explore</p>
            {showCard && (
              <div className="info-card">
                {skill.map((el) => (
                  <div className="info-card-contaner">
                    <div className="firstcon">
                      <p
                        onMouseEnter={() => setshowhover(true)}
                        onMouseLeave={() => setshowhover(false)}
                      >
                        {el.title}
                      </p>
                    </div>
                    {showhover && (
                      <div className="secondcon">
                        <h3>{el.title}</h3>
                        {el.desc.map((it) => (
                          <p>{it}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="right-side">
          <input type="text" placeholder="Search Coureses..." />
          <button className="sear">Search</button>
          <button className="jobcon">Job Connect</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
