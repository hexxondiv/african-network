import React from "react";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./who-we-are.scss";
const WhoWeAre = () => {
  return (
    <>
      {" "}
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 about-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>WHO WE ARE</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 offset-md-1">
        <h6>Name: African Network for Research and Development</h6>
        <h6>Background and Focus:</h6>
        <p>
          <strong>African Network for Research and Development</strong> is an
          international group of scholars interested in Africa’s development. It
          is organized in a network whose intention is to promote, disseminate,
          and stimulate high quality research in economic, management, and
          development studies.
        </p>
        <p>
          The seeds of Managing{" "}
          <strong>African Network for Research and Development</strong> were
          planted by Professor John Kuada during the 5th Aalborg University
          Conference whose theme was Finding Solutions to the New Challenges of
          Internationalization held at Comwell Rebild Bakker, Aalborg-Denmark
          4-6 June 2014. It was agreed by the inaugural group that there is lack
          of research on Africa made by African researchers. It was also agreed
          that it is important to strengthen research capacities and North-South
          partnerships.
        </p>
      </div>
    </>
  );
};

export default WhoWeAre;
