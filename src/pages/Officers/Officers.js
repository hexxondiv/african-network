import React from "react";
import { OfficersProfile } from "./OfficersProfile/OfficersProfile";
import President from "../../assets/images/asogwa.jpeg";
import "./officers.scss";
import { president, secretary, treasurer, eswatini } from "../../TextData";
import PageLinks from "../../components/PageLinks/PageLinks";
import { Link } from "react-router-dom";
export const Officers = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 officers-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>OUR OFFICERS</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="officers-bg mt4">
        <div className="col-md-8 offset-md-2 mobile-padding no-margin d-md-flex">
          <div className="col-md-6 off1 president2">
            {president.map((item, index) => (
              <OfficersProfile data={item} key={index} />
            ))}
          </div>{" "}
          <div className="col-md-3 off2">
            {treasurer.map((item, index) => (
              <OfficersProfile data={item} key={index} />
            ))}
          </div>{" "}
          <div className="col-md-6 off1 president1">
            {president.map((item, index) => (
              <OfficersProfile data={item} key={index} />
            ))}
          </div>{" "}
          <div className="col-md-3 off2">
            {secretary.map((item, index) => (
              <OfficersProfile data={item} key={index} />
            ))}
          </div>
        </div>
        <center>
          {" "}
          <div className="col-md-2 mt2 ">
            {eswatini.map((item, index) => (
              <OfficersProfile data={item} key={index} />
            ))}
          </div>
        </center>
      </div>
      <center>
        {" "}
        <Link to={"/members"}>
          <button class="button-92" role="button">
            View Members
          </button>
        </Link>
      </center>
    </>
  );
};
