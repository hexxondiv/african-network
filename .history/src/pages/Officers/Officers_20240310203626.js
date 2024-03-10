import React from "react";
import { LeadersProfile } from "./LeadersProfile/LeadersProfile";
import "./officers.scss";
import Img1 from "../../assets/images/const2.webp";
export const Officers = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 officers-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>OUR OFFICERS</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 mt">
        <div className="col-md-4 col-4">
          {" "}
          <LeadersProfile
            profileInfo="Mr. Will Cohen was born and raised in Orlando and has been serving at The
                   First Academy since June 2012. Mr. Cohen served three years as the Assistant Director 
                   of Athletics and Assistant Baseball Coach and now serves as the Director of Athletics.
                   Mr. Cohen spent seven years at Wellspring College as a student, graduating with Wellspring College’s
                    Class of 2008. After graduation, Mr. Cohen received his Bachelor of Science in Sports
                     Administration from Samford University in Birmingham, AL. From Mr. Cohen’s experience
                    
"
            profileImg={Img1}
            profilePortfolio="DIRECTOR OF ATHLETICS"
            profilePortfolioInner="Director of Athletics"
            profileQualification="PH.D"
            profileName="Mrs Lawson Albert"
          />
        </div>
      </div>
    </>
  );
};
