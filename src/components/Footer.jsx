import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
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
    </footer>
  );
}

export default Footer;
