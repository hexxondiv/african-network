import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <footer>
      <div className="col-md-12 footer-div">
        <div className="col-md-8 offset-md-2 flexy">
          <div className="col-md-4">
            <h3>ABOUT US</h3>
            <p>
              At African Family Firms (AFF) our purpose is to help African
              family business succeed. Our programs and products are developed
              to build stronger families and healthier businesses.
            </p>
          </div>
          <div className="col-md-4">
            <h3>ADDRESS</h3>
            <p>+263773397495 / +263772448876</p>
            <h6></h6>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
