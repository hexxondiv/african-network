import React from "react";
import { Link } from "react-router-dom";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./join-us.scss";
export const JoinUs = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 join-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>JOIN US</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 offset-md-2 mt7 join-us-div">
        <h1>Join ANRD</h1>
        <p>
          Full access to the Journal of Agricultural Education is available to
          paid AAAE members. The JAE is now published in PDF format. Individual
          articles and entire journals may be downloaded for offline reading.
          Journals from Volume 1 (1960) forward are available online. The
          Journal is also indexed by EBSCO.
        </p>
        <p>
          More information about the JAE can be found <Link>HERE</Link>
        </p>
        <p>
          Usernames and passwords for the JAE are created from the AAAE
          membership roster and may take up to two weeks to be activated.
        </p>
        <p>
          Membership questions should be addressed to the
          <Link> AAAE Association Manager.</Link>
        </p>
        <p>
          Lost passwords can be retrieved from the{" "}
          <Link>http://jae-online.org/</Link> site using your email address.
        </p>
        <p>
          For questions about this system please contact the{" "}
          <Link>JAE Editor</Link>
        </p>
        <div className="flexy flexyM mt7">
          {" "}
          <h5 style={{ flexGrow: 1 }}>Select Membership level</h5>
          <h5>
            <span>*</span> Mandatory fields
          </h5>
        </div>
        <hr />
        <div className="flexy ">
          <div className="col-md-3 offset-md-1">
            <h5>*Membership level</h5>
          </div>
          <div className="col-md-8 ">
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Active - $150.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Active Membership is open to all
                  individuals employed in agricultural education, agricultural
                  communications, agricultural leadership, extension education
                  or closely related fields. Only Active Members may serve in
                  leadership positions in the association.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Active - $150.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Active Membership is open to all
                  individuals employed in agricultural education, agricultural
                  communications, agricultural leadership, extension education
                  or closely related fields. Only Active Members may serve in
                  leadership positions in the association.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Active - $150.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Active Membership is open to all
                  individuals employed in agricultural education, agricultural
                  communications, agricultural leadership, extension education
                  or closely related fields. Only Active Members may serve in
                  leadership positions in the association.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Active - $150.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Active Membership is open to all
                  individuals employed in agricultural education, agricultural
                  communications, agricultural leadership, extension education
                  or closely related fields. Only Active Members may serve in
                  leadership positions in the association.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Active - $150.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Active Membership is open to all
                  individuals employed in agricultural education, agricultural
                  communications, agricultural leadership, extension education
                  or closely related fields. Only Active Members may serve in
                  leadership positions in the association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
