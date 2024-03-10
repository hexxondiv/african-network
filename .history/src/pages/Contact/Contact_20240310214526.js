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
        <div className="col-md-5"></div>

        <div className="col-md-7">
          <h4>We want to hear from you.</h4>
          <p>
            To better respond to your needs, the network welcomes all questions,
            suggestions and comments.
          </p>
          <form>
            <select>
              <option>---</option>
              <option>Ms</option>
              <option>Mr</option>
              <option>Dr</option>
              <option>Prof</option>
            </select>
            <h6>Your Name (required)</h6>
            <input /> <h6>Your Email (required)</h6>
            <input />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
