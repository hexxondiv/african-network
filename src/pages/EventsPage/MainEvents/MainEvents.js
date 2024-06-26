import React, { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import { Events } from "../../../components/Events/Event";
import { latestEvents } from "../../../TextData/eventsData";
import Dinner from "../../../assets/images/dinner.webp";
export const MainEvents = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const { blog_id } = useParams();
  useEffect(() => {
    setId(blog_id);
    console.log(blog_id);
  }, [blog_id]);

  useEffect(() => {
    if (id !== 0)
      setData(
        latestEvents.find((obj) => {
          return obj.id === id;
        })
      );
    // console.log(data, research, id);
  }, [id]);
  const [state, setState] = useState({
    query: "",
    list: latestEvents.filter((eventsItem) => {
      return eventsItem.id > 4;
    }),
  });

  return (
    <>
      {data ? (
        <>
          <section className="col-md-12 flexy page-background ">
            <div className="col-md-12 page-shadow header-wrapper">
              <div className="col-md-12 banner2 zoominheader"> </div>
              <div className=" col-md-12 after"></div>
              <div className="icon2 ">
                <h1>{data.eventsHeading}</h1>
                <center>
                  {" "}
                  <p>{data.eventDate}</p>
                </center>
              </div>
            </div>
          </section>
          <div className="mandate">
            <center>
              <div className="col-md-7">
                <h1>OUR MANDATE</h1>
                <p>Annual African Family Business ConferenceS</p>
              </div>
            </center>
          </div>
          <div className="col-md-12 event-showcase mobile-padding">
            <div className="col-md-5 offset-md-4">
              {" "}
              <img src={data.eventBanner} width="100%" alt={""} />
            </div>
          </div>
          <div className="col-md-10 offset-md-1  news-body">
            <h4>{data.eventsHeading}</h4>
            <p>{data.eventDetail}</p>
            <p>{data.moreDetails}</p>
            <div className="flexy mt">
              <ul
                className="list-unstyled list-inline"
                style={{ color: "grey", flexGrow: 1 }}
              >
                <li className="list-inline-item">
                  <strong>Tag:</strong>
                </li>
                <li className="list-inline-item">{data.tag1},</li>
                <li className="list-inline-item">{data.tag2},</li>
                <li className="list-inline-item">{data.tag3},</li>
                <li className="list-inline-item">{data.tag4},</li>
              </ul>
              <div className="register-link">
                {" "}
                <Link>Register</Link>
              </div>
              <ul className="list-unstyled list-inline share">
                <li className="list-inline-item">
                  <strong>Share:</strong>
                </li>
                <li className="list-inline-item">
                  <i class="icofont-facebook"></i>
                </li>
                <li className="list-inline-item">
                  <i class="icofont-twitter"></i>
                </li>
                <li className="list-inline-item">
                  <i class="icofont-instagram"></i>
                </li>
                <li className="list-inline-item">
                  <i class="icofont-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 offset-md-1 mt mobile-padding">
            <h3>Older Events</h3>
            <div className="row row-cols-2 row-cols-lg-4">
              {state.list.map((data, index) => (
                <Events data={data} key={data.id} />
              ))}
            </div>
          </div>
          <div className="col-md-12 mt">
            <img src={Dinner} width="100%" alt={""} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
