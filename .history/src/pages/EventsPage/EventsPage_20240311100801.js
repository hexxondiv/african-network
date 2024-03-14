import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./events-page.scss";
import { News } from "../../components/News/News";
import { latestNews } from "../../TextData";
import { Events } from "../../components/Events/Event";
import { latestEvents } from "../../TextData/eventsData";
import PageLinks from "../../components/PageLinks/PageLinks";
export const EventsPage = () => {
  const [state, setState] = useState({
    query: "",
    list: latestEvents,
  });

  return (
    <>
      {" "}
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 mission-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3 style={{ color: "   color: #f1f507;" }}>OUR EVENTS</h3>
                <p>Empowering change, one purpose-driven step at a time.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <h3 className="offset-md-2 mt">Stay Informed</h3>
      <div className="row row-cols-1 row-cols-lg-2  g-lg-2 col-md-8 offset-md-2 mt5">
        {state.list.map((data, index) => (
          <Events data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};
