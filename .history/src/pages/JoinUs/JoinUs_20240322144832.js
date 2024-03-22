import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./join-us.scss";
export const JoinUs = () => {
  const [content, setContent] = useState(
    <div className="flexy membership-level col-md-8 offset-md-2">
      <div className="col-md-3 offset-md-1">
        <h5>
          <span>*</span>Membership level
        </h5>
      </div>
      <div className="col-md-8 ">
        <div className="flexy flexyM">
          <input type="radio" />
          <div>
            <h6>Active - $150.00 (USD)</h6>
            <p>
              Subscription period: 1 year, on: January 1st No automatically
              recurring payments Active Membership is open to all individuals
              employed in agricultural education, agricultural communications,
              agricultural leadership, extension education or closely related
              fields. Only Active Members may serve in leadership positions in
              the association.
            </p>
          </div>
        </div>
        <div className="flexy flexyM">
          <input type="radio" />
          <div>
            <h6>Associate - $50.00 (USD)</h6>
            <p>
              Subscription period: 1 year, on: January 1st No automatically
              recurring payments Associate Membership is open to individuals who
              work with agricultural education related organizations such as the
              National Association of Agricultural Educators (NAAE), the
              National Association of Supervisors of Agricultural Education
              (NASAE), the National FFA Organization, career and technical
              education organizations, or others who wish to support the AAAE.
            </p>
          </div>
        </div>
        <div className="flexy flexyM">
          <input type="radio" />
          <div>
            <h6>Life Membership-Full Payment - $3,000.00 (USD)</h6>
            <p>Subscription period: Unlimited Full payment of $3,000</p>
          </div>
        </div>
        <div className="flexy flexyM">
          <input type="radio" />
          <div>
            <h6>Non-Member - Free</h6>
            <p>
              Subscription period: Unlimited Included in the directory but no
              access to membership only areas.
            </p>
          </div>
        </div>
        <div className="flexy flexyM">
          <input type="radio" />
          <div>
            <h6>Student - $30.00 (USD)</h6>
            <p>
              Subscription period: 1 year, on: January 1st No automatically
              recurring payments Student Membership is open to undergraduate and
              graduate students studying for careers in agricultural education,
              agricultural communications, agricultural leadership, extension
              education or closely related fields. Student Members are eligible
              to attend and participate in discussion of AAAE business, however
              they are not eligible to vote or hold office.
            </p>
          </div>
        </div>
        <div className="flexy flexyM mt7">
          {" "}
          <h5 style={{ flexGrow: 1 }}>Select Membership level</h5>
          <h5>
            <span>*</span> Mandatory fields
          </h5>
        </div>
        <hr />
      </div>
    </div>
  );

  const handleClick = () => {
    // Toggle between different contents
    setContent(
      <div>
        <h2>Content 2</h2>
        <p>This is the second content.</p>
      </div>
    );
  };
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

        {/* <div className="flexy membership-level">
          <div className="col-md-3 offset-md-1">
            <h5>
              <span>*</span>Membership level
            </h5>
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
                <h6>Associate - $50.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Associate Membership is open to individuals
                  who work with agricultural education related organizations
                  such as the National Association of Agricultural Educators
                  (NAAE), the National Association of Supervisors of
                  Agricultural Education (NASAE), the National FFA Organization,
                  career and technical education organizations, or others who
                  wish to support the AAAE.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Life Membership-Full Payment - $3,000.00 (USD)</h6>
                <p>Subscription period: Unlimited Full payment of $3,000</p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Non-Member - Free</h6>
                <p>
                  Subscription period: Unlimited Included in the directory but
                  no access to membership only areas.
                </p>
              </div>
            </div>
            <div className="flexy flexyM">
              <input type="radio" />
              <div>
                <h6>Student - $30.00 (USD)</h6>
                <p>
                  Subscription period: 1 year, on: January 1st No automatically
                  recurring payments Student Membership is open to undergraduate
                  and graduate students studying for careers in agricultural
                  education, agricultural communications, agricultural
                  leadership, extension education or closely related fields.
                  Student Members are eligible to attend and participate in
                  discussion of AAAE business, however they are not eligible to
                  vote or hold office.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          {content}
          <button onClick={handleClick} className="offset-md-11 steps-btn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
