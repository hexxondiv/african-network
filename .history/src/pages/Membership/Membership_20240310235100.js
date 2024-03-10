import React from "react";
import { Link } from "react-router-dom";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./membership.scss";
function Membership() {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 membership-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>MEMBERSHIP</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <center>
        <div className="col-md-6 mt">
          <h4>PROGRAMS FOR MEMBERS</h4>
          <p>
            At African Network for Research and Development (ANRD) our purpose
            is to help family businesses succeed. We do this by assisting family
            businesses harness their unique competitive advantage. Leveraging
            ‘family business’ as an asset is what truly sets our members apart
            from their competition.
          </p>
        </div>
      </center>
      <div className="col-md-8 offset-md-2 flexy mt5">
        <div className="col-md-4">
          <center>
            <div className="aizuI7  ">
              {" "}
              <g>
                <path
                  d="M167.833 166.189H32.167a3.08 3.08 0 0 1-3.083-3.079v-58.493c0-1.7 1.381-3.079 3.083-3.079a3.08 3.08 0 0 1 3.083 3.079v55.414h129.5v-55.414a3.08 3.08 0 0 1 3.083-3.079 3.08 3.08 0 0 1 3.083 3.079v58.493a3.08 3.08 0 0 1-3.083 3.079z"
                  fill="#3940B2"
                  data-color="1"
                ></path>
                <path
                  d="M143.167 120.011H137a3.08 3.08 0 1 1 0-6.158h6.167c14.062 0 24.667-9.264 24.667-21.55V58.44H32.167v33.864c0 12.286 10.59 21.55 24.632 21.55H63c1.703 0 3.083 1.378 3.083 3.079s-1.381 3.079-3.083 3.079h-6.201C39.241 120.011 26 108.099 26 92.304V55.361c0-1.7 1.381-3.079 3.083-3.079h141.833a3.08 3.08 0 0 1 3.083 3.079v36.943c.001 15.795-13.254 27.707-30.832 27.707z"
                  fill="#3940B2"
                  data-color="1"
                ></path>
                <path
                  d="M121.583 120.011H78.417c-1.703 0-3.083-1.378-3.083-3.079s1.381-3.079 3.083-3.079h43.167a3.08 3.08 0 1 1-.001 6.158z"
                  fill="#3940B2"
                  data-color="1"
                ></path>
                <path
                  d="M121.583 49.204h-6.167v-3.079c0-3.396-2.767-6.157-6.167-6.157H87.667c-3.401 0-6.167 2.761-6.167 6.157v3.079h-6.167v-3.079c0-6.79 5.533-12.314 12.333-12.314h21.583c6.802 0 12.333 5.524 12.333 12.314v3.079z"
                  fill="#3940B2"
                  data-color="1"
                ></path>
                <path
                  d="M78.417 129.246H63a3.08 3.08 0 0 1-3.083-3.079v-18.471c0-1.7 1.381-3.079 3.083-3.079h15.417a3.08 3.08 0 0 1 3.083 3.079v18.471a3.081 3.081 0 0 1-3.083 3.079zm-12.334-6.157h9.25v-12.314h-9.25v12.314z"
                  fill="#3940B2"
                  data-color="1"
                ></path>
                <path
                  d="M137 129.246h-15.417a3.08 3.08 0 0 1-3.083-3.079v-18.471a3.08 3.08 0 0 1 3.083-3.079H137a3.08 3.08 0 0 1 3.083 3.079v18.471a3.08 3.08 0 0 1-3.083 3.079zm-12.333-6.157h9.25v-12.314h-9.25v12.314z"
                  fill="#3940B2"
                  data-color="1"
                ></path>
              </g>
            </div>

            <h4>GOVERNACE FOR STABILITY</h4>
            <p>
              Governance is the foundation of the success of the future of all
              businesses. Every Family Firm must Audit themselves and set about
              a clear Family Constitution to pave the way to Good Governance.
            </p>
            <Link>Read More</Link>
          </center>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default Membership;
