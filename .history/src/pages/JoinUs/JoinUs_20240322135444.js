import React from "react";
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
      <div className="col-md-8 offset-md-2 mt">
        <h1>Join ANRD</h1>
      </div>
    </>
  );
};
