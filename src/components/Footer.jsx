import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <div>
          <div>
            <h3>Categories</h3>
            <p>Programming</p>
            <p>Design</p>
            <p>Business</p>
            <p>Marketing</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div>
            <h3>Legal</h3>
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 SkillDzire. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
