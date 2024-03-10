import React from "react";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./contact.scss";
const Contact = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 contact-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>CONTACT</h3>
                <p>Please fill in the forms below to contact us.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 mt offset-md-2 flexy">
        <div className="col-md-6"></div> <div className="col-md-6"></div>
      </div>
    </>
  );
};

export default Contact;
