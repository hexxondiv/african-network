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
      <div className="col-md-8 offset-md-2 flexy">
        <div className="col-md-6 contact-details mt5">
          {" "}
          <center>
            <div className="col-md-7">
              {" "}
              <div className="aizuI7  ">
                {" "}
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="-64.005 -351.92 135.926 136.026"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-64.005 -351.92 135.926 136.026"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M71.3-243.6l-.7-2c-1.6-4.8-6.9-9.7-11.7-11L41-261.5c-4.8-1.3-11.8.5-15.3 4l-6.5 6.5c-23.5-6.3-41.9-24.8-48.2-48.2l6.5-6.5c3.5-3.5 5.3-10.4 4-15.3l-4.9-17.9c-1.3-4.8-6.3-10.1-11-11.7l-2-.7c-4.8-1.6-11.6 0-15.1 3.6l-9.7 9.7c-1.7 1.7-2.8 6.6-2.8 6.7-.3 30.7 11.7 60.3 33.4 82 21.7 21.7 51.1 33.7 81.7 33.4.2 0 5.2-1.1 6.9-2.8l9.7-9.7c3.6-3.7 5.2-10.5 3.6-15.2z"></path>
                  </g>
                </svg>
              </div>
              <p>Tel:+263 773 397 495 / +263772448876 / +2348101853101</p>
              <p>Fax:123-456-7890</p>
            </div>{" "}
          </center>
          <center>
            <div className="col-md-7">
              {" "}
              <div className="aizuI7  ">
                {" "}
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="38.924 16.62 123.854 165.137"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="38.924 16.62 123.854 165.137"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M100.785 16.62c-34.193.036-61.897 27.791-61.861 61.989.036 34.204 62.035 103.148 62.035 103.148s61.855-69.074 61.819-103.278c-.036-34.199-27.796-61.895-61.993-61.859zm.093 87.724c-17.098.018-30.972-13.83-30.99-30.929-.018-17.098 13.831-30.968 30.925-30.986 17.103-.018 30.976 13.823 30.994 30.921.018 17.099-13.827 30.976-30.929 30.994z"></path>
                  </g>
                </svg>
              </div>
              <p>Sandton Head Office Johannesburg</p>
            </div>{" "}
          </center>{" "}
          <center>
            <div className="col-md-7">
              {" "}
              <div className="aizuI7  ">
                {" "}
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="27 49 146 101.9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="27 49 146 101.9"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M165.1 49H34.9c-4.4 0-7.9 3.5-7.9 7.8v86.3c0 4.3 3.6 7.8 7.9 7.8h130.2c4.4 0 7.9-3.5 7.9-7.8V56.8c0-4.3-3.6-7.8-7.9-7.8zm2.6 94.2c0 1.4-1.2 2.6-2.6 2.6H34.9c-1.5 0-2.6-1.2-2.6-2.6V69.3c13.3 8.2 55 33.3 67.7 33.3 12.7 0 54.4-25.1 67.7-33.3v73.9zm0-80c-8.2 5.1-55.4 34.2-67.7 34.2-12.3 0-59.5-29.1-67.7-34.2v-6.3c0-1.4 1.2-2.6 2.6-2.6h130.2c1.5 0 2.6 1.2 2.6 2.6v6.3z"></path>
                  </g>
                </svg>
              </div>
              <p>admin@africannetworkresearch.org</p>
            </div>{" "}
          </center>
        </div>

        <div className="col-md-5 offset-md-1 mobile-padding mt5">
          <h4>We want to hear from you.</h4>
          <small>
            To better respond to your needs, the network welcomes all questions,
            suggestions and comments.
          </small>
          <form className="mt5 contact-form">
            <select>
              <option>---</option>
              <option>Ms</option>
              <option>Mr</option>
              <option>Dr</option>
              <option>Prof</option>
            </select>
            <h6>Your Name (required)</h6>
            <input type="text" /> <h6>Your Email (required)</h6>
            <input type="text" /> <h6>Your Tel</h6>
            <input type="tel" />
            <h6>Subject </h6>
            <input type="text" /> <h6>Your Message (required)</h6>
            <textarea />
            <center className="mt3">
              <button>Send</button>
            </center>
          </form>
        </div>
      </div>
      <br />
    </>
  );
};

export default Contact;
