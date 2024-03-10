import React from "react";
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
        <div className="col-md-4">
          <h4>PROGRAMS FOR MEMBERS</h4>
          <p></p>
        </div>
      </center>
    </>
  );
}

export default Membership;
