import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./mission.scss";
import Img1 from "../../assets/images/consti.webp";
import Img2 from "../../assets/images/const2.webp";

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
      <div className="quick-links ">
        <ul className="list-unstyled list-inline offset-md-2">
          <li className="list-inline-item">
            <NavLink>News & Announcement</NavLink>
            <NavLink>Join or Renew</NavLink>
            <NavLink>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt8 mission-body">
        <div className="col-md-5">
          {" "}
          <h3>Mission Statement</h3>
          <p>
            The Association for the Study of the Worldwide African Diaspora
            (ANRD) is a not-for-profit, tax deductible organization of
            international scholars seeking to further our understanding of
            Africa and the African Diaspora, that is, the dispersal of people of
            African descent throughout the world. Through the examination of
            history, dance, anthropology, literature, women's studies,
            education, geology, political science, sociology, language, art,
            music, film, theater, biology, photography, etc., we seek to share
            the most recent research both within and across disciplinary and
            other conventional boundaries. We seek to do this by way of
            conferences and symposia held periodically, as well as through
            publications. In addition, we look for ways to share our work with
            students and the general community. All who share such interests are
            welcome to join ANRD.
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
      <div className="col-md-8 offset-md-2 flexy mt mission-body">
        <div className="col-md-6 ">
          <img src={Img2} width="100%" />
        </div>
        <div className="col-md-5 offset-md-1">
          {" "}
          <h3>
            The Constitution of African Network for Research and Development
          </h3>
          <p>
            The Association for the Study of the Worldwide African Diaspora
            (ANRD) is a not-for-profit, tax deductible organization of
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
          <Link to={"/"}>Read More</Link>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt8 mission-body">
        <div className="col-md-5">
          {" "}
          <h3>Our Vision</h3>
          <p>
            At the African Network for Research and Development, our vision
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
        <div className="col-md-6 offset-md-1 mt6">
          <video
            className="vid"
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src="blob:https://player.vimeo.com/26bd5d64-5a72-4c6a-9e27-b10ebb5d7047"
          ></video>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt mission-body">
        <div className="col-md-6 ">
          <img src={Img1} width="100%" />
        </div>
        <div className="col-md-5 offset-md-1">
          {" "}
          <h3>SUPPORT & NETWORKING</h3>
          <p>
            We actively support family businesses on their journey to
            multigenerational success by understanding their needs, providing
            them with relevant learning and connecting them with fellow business
            owners and advisors. We work closely with families and senior
            managers to understand the needs and challenges that are unique to
            family businesses. Our understanding of family businesses allows us
            to guide each member business to the learning pathway that is most
            relevant to them and their family journey.
          </p>
          <p>
            The support family businesses can get in our community is key to
            help them solve important challenges and remain successful across
            the generations. Connections have always been at the heart of our
            work. They were the reason AFF was founded and will continue to be a
            pillar of what we do to support family businesses to thrive.
            Families often feel they are going through a lonely journey, but the
            support family businesses can get in our community is key to help
            them solve important challenges and remain successful across the
            generations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
