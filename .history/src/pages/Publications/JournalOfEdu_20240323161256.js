import React from "react";
import { Link } from "react-router-dom";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./publication.scss";
export const JournalOfEdu = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 journal-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup journal-title {
"
              >
                <h2>JOURNAL OF AGRICULTURAL EDUCATION</h2>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="flexy offset-md-2 bread-crumb mt2">
        <Link to={"/"}>Home</Link> | <p>Stay Informed</p> | <p>Publications</p>{" "}
        | <p>Journal of Agricultural Education</p>
      </div>
      <div className="col-md-8 offset-md-2">
        <h4>
          <em>
            The Journal of Agricultural Education is a publication of the
            American Association for Agricultural Education
          </em>
        </h4>
      </div>
    </>
  );
};
