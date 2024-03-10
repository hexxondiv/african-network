import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <footer>
      <div className="prefooter-div page-background">
        <div className=" page-shadow3 header-wrapper">
          <div className="col-md-12 banner3 "> </div>
          <div className=" col-md-12 after2"></div>
          <center>
            <div className="col-md-6">
              <h3>
                ARE YOU A FAMILY BUSINESS LOOKING FOR HELP, SUPPORT, ADVICE, AND
                NETWORKING OPPORTUNITIES?
              </h3>
              <p>
                African Family Firms was created by African Family Business
                Owners for African Family Business Owners to establish a Voice
                and a space where African Family Businesses gain the tools and
                support they deserve.
              </p>
            </div>
          </center>
        </div>
      </div>
      <div className="col-md-12 footer-div">
        <div className="col-md-8 offset-md-2 flexy">
          <div className="col-md-3 padd">
            <h3>ABOUT US</h3>
            <p>
              At African Family Firms (AFF) our purpose is to help African
              family business succeed. Our programs and products are developed
              to build stronger families and healthier businesses.
            </p>
          </div>
          <div className="col-md-4 padd">
            <h3>ADDRESS</h3>
            <p>+263773397495 / +263772448876</p>
            <h6>SADC region</h6>
            <p>+2348101853101 ECOWAS region</p>
            <p>Harare, Lagos, Johannesburg, Capetown, Nairobi, Lusaka</p>
            <a>admin@africanfamilyfirms.org</a>
          </div>
          <div className="col-md-5">
            <div className="col-md-10 offset-md-1 email-div">
              <h5>SUBSCRIBE FOR EMAILS</h5>
              <input type="placeholder" placeholder="Enter your email here*" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        <p className="offset-md-2">© 2023 by Hexxondiv Global Services.</p>
      </div>
    </footer>
  );
}

export default Footer;
