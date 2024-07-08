import React from "react";
import { OfficersProfile } from "./OfficersProfile/OfficersProfile";
import President from "../../assets/images/asogwa.jpeg";
import "./officers.scss";
import { president, secretary, treasurer } from "../../TextData";
import PageLinks from "../../components/PageLinks/PageLinks";
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
      <div className="col-md-8 offset-md-2 mtt mobile-padding no-margin d-md-flex">
        <div className="col-md-3 off1">
          {treasurer.map((item, index) => (
            <OfficersProfile data={item} key={index} />
          ))}
        </div>{" "}
        <div className="col-md-6 off2">
          {president.map((item, index) => (
            <OfficersProfile data={item} key={index} />
          ))}
        </div>{" "}
        <div className="col-md-3 off1">
          {secretary.map((item, index) => (
            <OfficersProfile data={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
