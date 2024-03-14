import React, { useEffect, useState } from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink, useLocation } from "react-router-dom";

const MobileAccordion = () => {
  const location = useLocation(false);
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  // const setThisShowActive = () => {
  //   setShowActive(!showActive);
  // };
  // useEffect(() => {
  //   console.log(location.pathname);
  //   setThisShowActive();
  //   setThisShowActive();
  // }, [location]);
  return (
    <div className="col-md-12 mobile-accordion ">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <NavLink to={"/"}>Home</NavLink>
          </Accordion.Header>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <small>About</small>
          </Accordion.Header>
          <Accordion.Body>
            {" "}
            <ul className="list-unstyled">
              {" "}
              <li>
                <Link to={"/who-we-are"} className="mobile-navs">
                  WHo we are
                </Link>{" "}
              </li>
              <li>
                <Link to={"/tuition"} className="mobile-navs">
                  Mission & Constitution
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/mission"} className="mobile-navs">
                  Campus Visits
                </Link>{" "}
              </li>
              <li>
                <Link to={"/officers"} className="mobile-navs">
                  Officers
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/contact"} className="mobile-navs">
                  Contact
                </Link>{" "}
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <small>Get Involved</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Overview
                </Link>
              </li>{" "}
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Lower School
                </Link>
              </li>{" "}
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Middle School
                </Link>
              </li>{" "}
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Upper School
                </Link>
              </li>{" "}
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Learning Intentionally Enhanced
                </Link>
              </li>{" "}
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Home School Program
                </Link>
              </li>{" "}
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Special Needs Program
                </Link>
              </li>{" "}
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <small>Stay Informed</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Lower School
                </Link>
              </li>
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Middle School
                </Link>
              </li>
              <li>
                <Link to={"/comming-soon"} className="mobile-navs">
                  Upper School
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default MobileAccordion;
