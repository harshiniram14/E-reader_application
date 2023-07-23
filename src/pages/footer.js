import React from "react";
import "../assets/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <ul className="footer-list">
        <li className="footer-item">
          <a href="#">Conditions</a>
        </li>
        <li className="footer-item">
          <a href="/policy">Policies</a>
        </li>
        <li className="footer-item">
          <a href="/faq">FAQ</a>
        </li>
        <li className="footer-item">
          <a href="/feedback">Contact</a>
        </li>
        <li className="footer-item">
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
