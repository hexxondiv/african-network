import React from "react";
import { LeadersProfile } from "./LeadersProfile/LeadersProfile";
import "./officers.scss";
import Img1 from "../../assets/images/const2.webp";
import { officers } from "../../TextData";
export const Officers = () => {
  const [state, setState] = useState({
    query: "",
    list: officers,
  });
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
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          {state.list.map((item, index) => (
            <LeadersProfile data={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
