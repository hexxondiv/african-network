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
                <h3>PROGRAMS FOR MEMBERS</h3>
                <p>
                  At African Family Firms (AFF) our purpose is to help family
                  businesses succeed. We do this by assisting family businesses
                  harness their unique competitive advantage. Leveraging ‘family
                  business’ as an asset is what truly sets our members apart
                  from their competition.
                </p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
    </>
  );
}

export default Membership;
