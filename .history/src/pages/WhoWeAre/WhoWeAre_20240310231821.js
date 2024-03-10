import React from "react";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./who-we-are.scss";
const WhoWeAre = () => {
  return (
    <>
      {" "}
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 about-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>WHO WE ARE</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 offset-md-1">
        <h6>Name: African Network for Research and Development</h6>
        <h6>Background and Focus:</h6>
      </div>
    </>
  );
};

export default WhoWeAre;
