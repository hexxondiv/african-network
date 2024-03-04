import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";
import Banner4 from "../../assets/images/banner4.jpeg";
import Welcome from "../../assets/images/welcome-img.webp";
import "./home.scss";
export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="car-div">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={Banner1} width="100%" />
            <Carousel.Caption>
              <h1>First slide label</h1>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner2} width="100%" />
            <Carousel.Caption>
              <h1>Second slide label</h1>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner3} width="100%" />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Banner4} width="100%" />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="welcome-div col-md-10 offset-md-1 flexy mt">
        <div className="col-md-6 mt">
          <div className="col-md-11">
            {" "}
            <h3>Welcome to African Network for Research and Development</h3>
            <p>
              ANRD is a not-for-profit organization of international scholars
              seeking to further their understanding of Africa and the African
              Diaspora. We do this through conferences and symposia, as well as
              through publications. We also look for ways to share our work with
              students and the general community. All who share these interests
              are welcome to join ANRD. By joining you will be informed of all
              the Association's activities and initiatives, and be eligible to
              participate in ANRD conferences and governance.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Welcome} width="100%" />
        </div>
      </div>
    </>
  );
};
