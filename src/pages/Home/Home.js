import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Banner0 from "../../assets/images/neadafrica.png";
import Banner2 from "../../assets/images/5.jpg";
import Banner3 from "../../assets/images/4.png";
import Banner4 from "../../assets/images/2.jpg";
import Welcome from "../../assets/images/banner1.png";
import MovingComponent from "react-moving-text";
import { News } from "../../components/News/News";
import { latestNews } from "../../TextData";
import "./home.scss";
import { Events } from "../../components/Events/Event";
import { latestEvents } from "../../TextData/eventsData";
import Ratio from "react-bootstrap/Ratio";

export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [state, setState] = useState({
    query: "",
    //  list: popularCourses,
    list2: latestNews.filter((newsItem) => {
      return newsItem.id <= 4;
    }),
    list3: latestEvents.filter((eventsItem) => {
      return eventsItem.id <= 4;
    }),
    //  list3: latestEvents,
  });
  return (
    <>
      <div className="car-div">
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          <Carousel.Item>
            <img src={Banner0} width="100%" alt={""} />
            <Carousel.Caption>
              <p>
                <MovingComponent
                  type="slideInFromLeft"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  {" "}
                  Unlock the power of knowing who we are as Africans and embrace our rich heritage
                </MovingComponent>
              </p>

              <h1>
                <MovingComponent
                  type="slideInFromTop"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  REDISCOVER OUR IDENTITY
                </MovingComponent>
              </h1>

              {/*<button>Read More</button>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner2} width="100%" alt={""}/>
            <Carousel.Caption>
              <p>
                <MovingComponent
                  type="slideInFromLeft"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  {" "}
                  Fostering education tailored to African contexts to build a proud and aware community
                </MovingComponent>
              </p>

              <h1>
                <MovingComponent
                  type="slideInFromTop"
                  duration="4000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  RE-EDUCATE AND EMPOWER
                </MovingComponent>
              </h1>

              {/*<button>Read More</button>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner3} width="100%" alt={""} />
            <Carousel.Caption>
              <p>
                <MovingComponent
                  type="slideInFromLeft"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  {" "}
                  Protecting and promoting African innovations and intellectual properties
                </MovingComponent>
              </p>

              <h1>
                <MovingComponent
                  type="slideInFromTop"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  RECLAIM OUR INTELLECTUAL FUTURE
                </MovingComponent>
              </h1>

              {/*<button>Read More</button>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner4} width="100%" alt={""}/>
            <Carousel.Caption>
              <p>
                <MovingComponent
                  type="slideInFromLeft"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  {" "}
                  Connect, collaborate, and contribute to a brighter future for Africa and its people.
                </MovingComponent>
              </p>

              <h1>
                <MovingComponent
                  type="slideInFromTop"
                  duration="3000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  JOIN OUR NETWORK
                </MovingComponent>
              </h1>

              {/*<button>Read More</button>*/}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="welcome-div col-md-10 offset-md-1 flexy mt no-margin mobile-padding">
        <div className="col-md-6 mt5">
          <div className="col-md-11">
            {" "}
            <h3>Rethinking Our African Identity</h3>
            <p>
            NEAD is committed to redefining what it means to be African. Through collective introspection and dialogue, we seek to deepen our understanding of our cultural and intellectual heritage.
            </p>
            <Link to={"/who-we-are"}>Read More...</Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Welcome} width="100%" alt={""} />
        </div>
      </div>
      <div className="events-div">
        <center>
          <h3>NEXT EVENTS</h3>
        </center>
        <div className="col-md-8 offset-md-2 flexy">
          <div className="col-md-4 line">
            <h3>JUNE 2024</h3>
            <h5>African Family Business Summit</h5>
            <p>27-28 JUNE 2024, LAGOS, NIGERIA</p>
            <Link>MORE INFO</Link>
          </div>
          <div className="col-md-4 line">
            {" "}
            <h3>01/NOVEMBER</h3>
            <h5>Linkages Family Business Tour</h5>
            <p>01-07 November 2024 </p>
            <Link>MORE INFO</Link>
          </div>
          <div className="col-md-4 mt8" style={{ paddingLeft: "10px" }}>
            <center>
              “Call it a clan, call it a network, call it a tribe, call it a
              family: Whatever you call it, whoever you are, you need one.” –
            </center>
            <h6>Jane Howard</h6>
          </div>
        </div>
      </div>
      <div className="youtube-video">
        {" "}
        <div className="col-md-8 offset-md-2 mt4 mobile-padding ">
          <Ratio aspectRatio={50}>
            <iframe
              width="1190"
              height="669"
              src="https://www.youtube.com/embed/37-IJqDdOFI"
              title="African Development Network"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Ratio>
        </div>
      </div>
      <center>
        <div className="col-md-6 mt mobile-padding">
          <h3>NETWORKING FOR SUCCESS</h3>
          <p>
          We invite you to join us in our journey towards a brighter future for Africa and its people. Whether you are an educator, researcher, entrepreneur, student, or simply passionate about African development, there is a place for you at NEAD. Together, we can rethink our identity, re-educate ourselves, and reclaim Africa’s intellectual future.
          </p>
        </div>
      </center>
      <div className="col-md-8 offset-md-2  row row-cols21 row-cols-lg-4 g-2 g-lg-4 mt6 mobile-padding">
        {state.list2.map((data, index) => (
          <News data={data} key={"m" + index} />
        ))}
      </div>
      <div className="events-div mt no-margin">
        <center>
          <div className="col-md-6">
            <h3>OUR FLAGSHIP EVENTS</h3>
            <p>
              Every year we hold annual events focused on some of the areas our
              4 pillars address. Click on pictures of any of the events below to
              access the recordings and see what was tabled at these incredible
              gatherings.
            </p>
          </div>
        </center>
        <div className="col-md-8 offset-md-2  row row-cols-1 row-cols-lg-2 g-2 g-lg-4 mt6  mobile-padding">
          {state.list3.map((data, index) => (
            <Events data={data} key={"m" + index} />
          ))}
        </div>
      </div>
    </>
  );
};
