import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
function Footer() {
  return (
    <footer>
      <div className="page-background mt no-margin">
        <div className=" page-shadow3 header-wrapper">
          <div className="col-md-12 banner3 "> </div>
          <div className=" col-md-12 after2"></div>
          <center>
            <div
              className="col-md-6 prefooter-writeup col-12 mobile-padding
"
            >
              <h3>
                "I am an African."
              </h3>
              <p>
              Empowering Africa through Identity, Education, and Innovation.
              </p>
              <Link to={"/join-us"}>
                {" "}
                <button>JOIN US</button>
              </Link>
            </div>
          </center>
        </div>
      </div>
      <div className="col-md-12 footer-div">
        <div className="col-md-8 offset-md-2 flexy">
          <div className="col-md-3 padd">
            <h3>ABOUT US</h3>
            <p>
              At NEAD, we are driven by a deep commitment to redefining what it means to be African in the modern world. Our mission is to rethink our African identity, re-educate ourselves, and reclaim Africa's intellectual future through dedicated research, comprehensive education, and robust networking.
            </p>
          </div>
          <div className="col-md-4 padd">
            <h3>ADDRESS</h3>
            <p>ECOWAS region</p>

            <p>+2348034232630 / +2348068122576</p>
            <p>Swaziland, Lagos, Johannesburg, Capetown, Nairobi, Lusaka</p>
            <p>admin@NEAD.org</p>
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
      <center className="credits">
        <div className="col-md-4">© NEAD 2024</div>
        <div className="col-md-4">by <Link className="text-light" target="_blank" to={"https://www.hexxondiv.com"}>Hexxondiv Global Services</Link></div>
      </center>
    </footer>
  );
}

export default Footer;
