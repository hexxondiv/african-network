import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";
import Banner4 from "../../assets/images/banner4.jpeg";
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
        <div className="col-md-6">
          <h3>Welcome to African Network for Research and Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            viverra arcu lectus, vel posuere massa posuere quis. In vitae lorem
            magna. Ut accumsan lacus in mauris facilisis, quis porta ipsum
            finibus. Sed ultricies tincidunt erat, a luctus turpis. Aenean
            fermentum arcu nec mauris sodales, nec accumsan diam viverra. Duis
            magna augue, interdum in orci tempor, hendrerit facilisis libero.
            Maecenas rhoncus ex a aliquet congue. Quisque volutpat augue magna,
            at ullamcorper elit laoreet quis. Mauris volutpat lacus id tortor
            porta egestas.
          </p>
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
};
