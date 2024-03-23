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
        <h5>Journal of Ag Ed Online Publishing</h5>
        <Link to={"/"}>http://jae-online.org/</Link>
        <p>
          Full Journal access is available to paid AAAE members. The JAE is now
          published in PDF format. Individual articles and entire journals may
          be downloaded for offline reading. Journals from Volume 1 (1960)
          forward are available online. The Journal is also indexed by EBSCO.
        </p>
        <p>
          Usernames and passwords are created from the AAAE membership roster.
          Username is your last name plus the first 4 letters of your first name
          (Ex: RobertsGrad). Membership questions should be addressed to the
          Membership Secretary. Lost passwords can be retrieved from the
          http://jae-online.org/ site using your email address.
        </p>
        <h5>Having Trouble Accessing the JAE Website?</h5>
        <p>Please contact the JAE Editor (listed below.)</p>
        <h5>Journal of Ag Ed Review (Fast Track)</h5>
        <p>
          At least one author of a JAE submission must be a member of AAAE.{" "}
          <br />
          To submit and review article for the Journal, visit the PKP Submission
          site for JAE
        </p>
        <Link to={""}>Link to PRK</Link>
        <p>You create your own username and password.</p>
        For questions about this system, please contact the{" "}
        <Link to={""}>JAE Editor.</Link>
        <h4>Subscriptions</h4>
        <p>Please send all subscription requests to:</p>
        <h5>Dr. Shannon Arnold</h5>
        <p>AAAE Treasurer</p>
        <p>Professor</p>
        <p>
          Agricultural Education and Technology Education Montana State
          University
        </p>
        <Link to={""}>shannon.arnold@montana.edu</Link>
        <p>
          If you have questions about your existing subscription, please send
          them to:
        </p>
        <h6>Brian Myers</h6>
        <small>Professor and Chair</small>
        <p>305 Rolfs Hall</p>
        <p>PO Box 110540</p>
        <p>Gainesville, FL 32611</p>
        <p>352-392-0502</p>
      </div>
    </>
  );
};
