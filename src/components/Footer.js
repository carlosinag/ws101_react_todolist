import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <h4>Copyright © 2024 | All Rights Reserved</h4>
        <p>Developed by <span>John Carlo Sinag</span></p>
      </div>
      <div className="footer-icontop">
        <a href="#home">
          <i className='bx bx-up-arrow-alt'></i>
        </a>
      </div>
    </footer>
  );
}
export default Footer;