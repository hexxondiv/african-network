import React, { useState } from "react";
import { Link } from "react-router-dom";
import {API_URL} from "../../config";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./join-us.scss";
export const JoinUs = () => {
  const handleClick = (newContent) => {
    setContent(secondContent);
  };

  const initialContent = (
    <>
      <div className="flexy flexyM mt7">
        {" "}
        <h5 style={{ flexGrow: 1 }}>Select Membership level</h5>
        <h5>
          <span>*</span> Mandatory fields
        </h5>
      </div>
      <hr />
      <div className="flexy membership-level col-md-12 offset-md-">
        <div className="col-md-3 offset-md-1">
          <h5>
            <span>*</span>Membership level
          </h5>
        </div>

        <div className="col-md-8 ">
          <div className="flexy flexyM">
            <input type="radio" />
            <div>
              <h6>Active - &#8358; 5,000.00 (NGN)</h6>
              <p>
                Subscription period: 1 year, on: January 1st. No automatically
                recurring payments. Active Membership is open to all individuals.
                Only Active Members may serve in leadership positions in the association.
              </p>
              <p>Join the Network for Educational Advancement and Development (NEAD) Membership to access exclusive resources, cutting-edge research, and professional development opportunities aimed at enhancing education across Africa. As a member, you will benefit from a wealth of educational materials, networking with leading educators and policymakers, discounted event rates, and eligibility for awards. Whether you are an educator, researcher, policymaker, student, or passionate about educational development, NEAD Membership provides the tools and connections to help you make a meaningful impact. Join us today at https://neadafrica.com/membership and be part of transforming education in Africa.</p>
            </div>
          </div>
         
          {/*<div className="flexy flexyM">*/}
          {/*  <input type="radio" />*/}
          {/*  <div>*/}
          {/*    <h6>Life Membership-Full Payment - $3,000.00 (USD)</h6>*/}
          {/*    <p>Subscription period: Unlimited Full payment of $3,000</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="flexy flexyM">*/}
          {/*  <input type="radio" />*/}
          {/*  <div>*/}
          {/*    <h6>Non-Member - Free</h6>*/}
          {/*    <p>*/}
          {/*      Subscription period: Unlimited Included in the directory but no*/}
          {/*      access to membership only areas.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="flexy flexyM">*/}
          {/*  <input type="radio" />*/}
          {/*  <div>*/}
          {/*    <h6>Student - &#8358;3,000 (NGN)</h6>*/}
          {/*    <p>*/}
          {/*      Subscription period: 1 year, on: January 1st. No automatically*/}
          {/*      recurring payments. Student Membership is open to undergraduate*/}
          {/*      and graduate students studying for careers in education, communications, leadership,*/}
          {/*      extension education or closely related fields. Student Members*/}
          {/*      are eligible to attend and participate in discussion of NEAD*/}
          {/*      Africa, however they are not eligible to vote or hold office.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <button onClick={handleClick} className="offset-md-11 steps-btn">
        Next
      </button>{" "}
    </>
  );
  const [content, setContent] = useState(initialContent);

  const resetContent = () => {
    setContent(initialContent);
  };

  const secondContent = (
    <div className="second-steps">
      <div className="flexy flexyM mt7">
        {" "}
        <h5 style={{ flexGrow: 1 }}>Enter your details</h5>
        <h5>
          <span>*</span> Mandatory fields
        </h5>
      </div>
      <hr />
      <div className="col-md-7 offset-md-1">
        <div className="flexy ">
          <small className="col-md-3">
            <span>*</span> Your email address
          </small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">
            <span>*</span> First Name
          </small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">
            <span>*</span> Last Name
          </small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy flexyM mt2">
          <small className="col-md-3">Title</small>
          <select className="col-md-4">
            <option>Ms</option>
            <option>Mr</option>
            <option>Dr</option>
            <option>Miss</option>
            <option>Mrs</option>
          </select>
        </div>{" "}
        <div className="flexy mt2">
          <small className="col-md-3">College</small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy mt3">
          <small className="col-md-3">Department</small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">Address</small>
          <textarea className="col-md-9" />
        </div>
        <div className="flexy  mt2">
          <small className="col-md-3">City</small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy mt2">
          <small className="col-md-3">State</small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy mt2">
          <small className="col-md-3">Zip Code</small>
          <input type="email" className="col-md-9" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">Phone</small>
          <input type="tel" className="col-md-9" />
        </div>{" "}
        <div className="flexy mt2">
          <small className="col-md-3">url</small>
          <input type="text" className="col-md-9" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">Photo</small>
          <input type="file" className="col-md-9" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">Research Area</small>
          <input type="text" className="col-md-9" />
        </div>{" "}
        <div className="flexy mt2">
          <small className="col-md-3">Research Area 2</small>
          <input type="text" className="col-md-9" />
        </div>{" "}
        <div className="flexy mt2  offset-md-1">
          <small className="col-md-3">
            <span>*</span>Name
          </small>
          <input type="text" className="col-md-8" />
        </div>{" "}
        <div className="flexy  mt2">
          <small className="col-md-3">Institution Affiliation</small>
          <input type="text" className="col-md-9" />
        </div>{" "}
        <div className="flexy flexyM mt3">
          {" "}
          <button onClick={resetContent} className="offset-md-2 steps-btn">
            Previous
          </button>{" "}
          <button className="offset-md-9 steps-btn">Submit</button>
        </div>
      </div>
    </div>
  );

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
                <h2>JOIN US</h2>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 offset-md-2 mt7 join-us-div mobile-padding">
        <h1>Join NEAD Africa!</h1>
        <p>
          Full access to the NEAD Journal is available to
          paid NEAD members. The Journal is now published in PDF format. Individual
          articles and entire journals may be downloaded for offline rea ding.
          Journals from Volume 1 (2024) forward are available online. The
          Journal is also indexed by Google Scholar.
        </p>
        <p>
          More information about the NEAD can be found <a href={API_URL} target="_blank" rel="noopener noreferrer">HERE</a>
        </p>
        <p>
          Usernames and passwords for the NEADJ are created from the NEAD
          membership roaster and is activated within 72 hours.
        </p>
        <p>
          Membership questions should be addressed to the
          <a  target="_blank" rel="noopener noreferrer" href={"mailTo:neadafrica@gmail.com" }> NEAD Association Manager.</a>
        </p>
        <p>
          Lost passwords can be retrieved from the{" "}
          <a  target="_blank" rel="noopener noreferrer" href={API_URL+"neadj/login/lostPassword"}>Journal Site</a> using your email address.
        </p>
        <p>
          For questions about this system please contact the{" "}
          <a  target="_blank" rel="noopener noreferrer" href={"mailTo:editor-in-chief@neadafrica.com"}>NEAD Journal Editor</a>
        </p>
        <div>{content}</div>
      </div>
    </>
  );
};
