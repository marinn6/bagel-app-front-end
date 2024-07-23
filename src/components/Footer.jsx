import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.tiktok.com/@yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={30} />
        </a>
      </div>
      <div className="note">
        <p>We hope you find your endless bagel.</p>
      </div>
      <div className="footer-links">
        <Link to="/do-not-contact-us">Do Not Contact Us</Link>
      </div>
    </footer>
  );
}

export default Footer;
