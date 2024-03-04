import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <footer>
      <div className="col-md-12 footer-div">
        <div className="col-md-9 offset-md-2 flexy">
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
            <h6>SADC region</h6>
            <p>+2348101853101 ECOWAS region</p>
            <p>Harare, Lagos, Johannesburg, Capetown, Nairobi, Lusaka</p>
            <a>admin@africanfamilyfirms.org</a>
          </div>
          <div className="col-md-5">
            <div className="col-md-10 offset-md-1 email-div"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
