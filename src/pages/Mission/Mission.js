import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./mission.scss";
import Img1 from "../../assets/images/consti.webp";
import Img2 from "../../assets/images/constitution.jpg";
import Constitution from "../../assets/docs/uead_constitution.pdf";
import PageLinks from "../../components/PageLinks/PageLinks";

const Mission = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 mission-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>OUR MISSION & CONSTITUTION</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 offset-md-2 flexy mt8 mission-body mobile-padding">
        <div className="col-md-5">
          {" "}
          <h3>Mission Statement</h3>
          <p>
            At Ubuntu and Education for African Development Association (UEAD), our mission is to rethink our African identity, re-educate ourselves, and reclaim Africa's intellectual future. Through dedicated research, comprehensive education, and robust networking, we empower individuals and communities to embrace their heritage, protect their innovations, and contribute to a prosperous and respected global African presence.
            In addition, we look for ways to share our work with
            students and the general community. All who share such interests are
            welcome to join UEAD.
          </p>
        </div>
        <div className="col-md-6 offset-md-1 mt6">
          <video
            className="vid"
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src="https://video.wixstatic.com/video/80c05f_e2c524db1f264178a8558c92dbf76fb0/1080p/mp4/file.mp4"
          ></video>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt mission-body no-margin mobile-padding">
        <div className="col-md-6 mt">
          <img src={Img2} width="100%" />
        </div>
        <div className="col-md-5 offset-md-1 mt4">
          {" "}
          <h3>
            The Constitution of Ubuntu and Education for African Development
          </h3>
          <p>
            Ubuntu and Education for African Development Association
            (UEAD) is a not-for-profit, tax deductible organization of
            international scholars seeking to further our understanding of
            Africa and the African Diaspora.
          </p>
          <h6>RENEWAL OF MEMBERSHIP.</h6>
          <p>
            Membership is renewed through paying dues, and all members must
            renew their membership annually (except for Lifetime Members) in
            order to be in good standing. The membership/fiscal year coincides
            with the calendar year. In an election year, members must renew by
            March 31 in order to vote or stand for election.{" "}
          </p>{" "}
          <h6>QUALIFICATION OF MEMBERSHIP.</h6>
          <p>
            All rights and privileges outlined in this document are applicable
            only to members in good standing; that is, those who have annually
            renewed their membership (except for Lifetime Members, who need not
            renew their membership).
          </p>{" "}
          <h6>BOARD MEMBERS.</h6>
          <p>
            The Executive Board shall consist of no more than twenty (20)
            persons, including: a President, a Vice-President, a Secretary, and
            Treasurer.
          </p>
          <Link to={Constitution} target="_blank">Read More</Link>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt8 mission-body mobile-padding">
        <div className="col-md-5">
          {" "}
          <h3>Our Vision</h3>
          <p>
            At the Ubuntu and Education for African Development, our vision
            transcends borders and barriers, igniting a continent-wide flame of
            innovation and progress. We envision a future where African
            brilliance shines brightly on the global stage, where research and
            development are the cornerstones of sustainable growth and
            prosperity. With unwavering dedication, we strive to unlock the
            immense potential within our diverse communities, forging pathways
            to excellence and shaping a brighter tomorrow for generations to
            come
          </p>
        </div>
        <div className="col-md-6 offset-md-1 mt6 mobile-padding">
          <video
            className="vid"
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src="https://video.wixstatic.com/video/80c05f_e2c524db1f264178a8558c92dbf76fb0/1080p/mp4/file.mp4"
          ></video>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt mission-body mobile-padding">
        <div className="col-md-6 ">
          <img src={Img1} width="100%" />
        </div>
        <div className="col-md-5 offset-md-1">
          {" "}
          <h3>OUR CORE VALUES</h3>
          <ul>
<li><strong>Ubuntu:</strong> We believe in the African philosophy of Ubuntu – "I am because we are." Our efforts are rooted in the idea of community and mutual support.</li>
<li><strong>Empowerment:</strong> We strive to empower individuals through knowledge, skills, and opportunities.</li>
<li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our activities.</li>
<li><strong>Innovation:</strong> We encourage creativity and innovation in all aspects of our work.</li>
<li><strong>Respect for Heritage:</strong> We honor and respect our diverse African heritage, traditions, and cultures.</li>
          </ul>
        
        </div>
      </div>
    </>
  );
};

export default Mission;
