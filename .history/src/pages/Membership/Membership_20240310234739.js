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
      <div className="col-md-8 offset-md-2 flexy">
        <div className="col-md-4">
          <h4>GOVERNACE FOR STABILITY</h4>
          <p></p>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default Membership;
