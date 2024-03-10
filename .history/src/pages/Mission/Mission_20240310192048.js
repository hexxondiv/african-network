import React from "react";
import "./mission.scss";
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
      <div className="col-md-8 offset-md-2 flexy mt mission-body">
        <div className="col-md-6">
          {" "}
          <h3>Mission Statement</h3>
          <p>
            The Association for the Study of the Worldwide African Diaspora
            (ASWAD) is a not-for-profit, tax deductible organization of
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
            welcome to join ASWAD.
          </p>
        </div>
        <div className="col-md-6 offset-md-1">
          <h3>Quick Links</h3>
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
    </>
  );
};

export default Mission;
