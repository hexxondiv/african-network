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
                className="col-md-6 prefooter-writeup"
              >
                <h2>NETWORK FOR EDUCATIONAL ADVANCEMENT AND DEVELOPMENT JOURNAL</h2>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="flexy offset-md-2 bread-crumb mt2">
        <Link to={"/"}>Home</Link> | <p>Stay Informed</p> | <p>Publications</p>{" "}
        | <p>NEAD Journal</p>
      </div>
      <div className="col-md-8 offset-md-2 journal-details mt2">
        <h4>
          <em>
            NEAD Journal of Education
          </em>
        </h4>
        <h5>NEAD Journal of Education Online Publishing</h5>
        <Link to={"http://localhost:8000"}>Go to Journal</Link>
        <p>
          Full Journal access is available to paid NEAD members. The NEADJ is now
          published in PDF format. Individual articles and entire journals may
          be downloaded for offline reading. Journals from Volume 1 (2024)
          forward are available online. The Journal is also indexed by EBSCO.
        </p>
        <p>
          Usernames and passwords are created from the NEAD membership roster.
          Username is your last name plus the first 4 letters of your first name
          (Ex: RobertsGrad). Membership questions should be addressed to the
          Membership Secretary. Lost passwords can be retrieved from the
          https://journal.neadafrica.org/ site using your email address.
        </p>
        <h5>Having Trouble Accessing the NEADJ Website?</h5>
        <p>Please contact the NEADJ Editor (listed below.)</p>
        <h5>NEAD Journal Review (Fast Track)</h5>
        <p>
          One of the perks of NEAD membership is the ability to submit articles to the NEAD Journal (NEADJ) without incurring a submission fee. At least one author of a NEADJ submission must be a NEAD member to qualify for this benefit. For non-members, a submission fee of $49 is required upon acceptance of the article. This policy ensures that members have an added incentive to contribute their research and insights to the journal, fostering a robust community of scholars and practitioners dedicated to educational advancement and African intellectual heritage.
          <br />
          To submit and review article for the Journal, visit the PKP Submission
          site for NEADJ
        </p>
        <Link to={"http://localhost:8000"}>Link to PKP</Link>
        <p>You create your own username and password.</p>
        For questions about this system, please contact the{" "}
        <Link to={""}>NEADJ Editor.</Link>
        <h4>Subscriptions</h4>
        <p>Please send all subscription requests to:</p>
        <h5>Dr. Sandra E. Augustine</h5>
        <p>NEADJ Secretary<br/>
        PhD, Educational Technology, University of Port Harcourt, Rivers State, Nigeria<br/>
        <Link to={"mailto:drsandraaugustine@gmail.com"}>drsandraaugustine@gmail.com</Link></p>
        <p>
          If you have questions about your existing subscription, please send
          them to:
        </p>
        <h5>NEAD Treasury</h5>
        <p>305 Rolfs Hall<br/>
        PO Box 110540<br/>
        Gainesville, FL 32611<br/>
        352-392-0502</p>
        <Link to={""}>treasury@neadsafrica.org</Link>
      </div>
    </>
  );
};
