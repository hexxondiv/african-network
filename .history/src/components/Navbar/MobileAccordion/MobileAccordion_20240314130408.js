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
            <small>Home</small>
          </Accordion.Header>
          <Accordion.Body>
            {" "}
            <ul className="list-unstyled">
              <li>
                {" "}
                <li>
                  <Link to={"/how-to-apply"} className="mobile-navs">
                    How to Apply
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/tuition"} className="mobile-navs">
                    Tuition
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/campus-visits"} className="mobile-navs">
                    Campus Visits
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/admissions-events"} className="mobile-navs">
                    Admissions Events
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/admissions-checklist"} className="mobile-navs">
                    Admissions Checklist
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/faq"} className="mobile-navs">
                    FAQs
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/new-family-information"} className="mobile-navs">
                    New Family Information
                  </Link>{" "}
                </li>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <small>About</small>
          </Accordion.Header>
          <Accordion.Body>
            {" "}
            <ul className="list-unstyled">
              <li>
                {" "}
                <li>
                  <Link to={"/how-to-apply"} className="mobile-navs">
                    How to Apply
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/tuition"} className="mobile-navs">
                    Tuition
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/campus-visits"} className="mobile-navs">
                    Campus Visits
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/admissions-events"} className="mobile-navs">
                    Admissions Events
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/admissions-checklist"} className="mobile-navs">
                    Admissions Checklist
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/faq"} className="mobile-navs">
                    FAQs
                  </Link>{" "}
                </li>
                <li>
                  <Link to={"/new-family-information"} className="mobile-navs">
                    New Family Information
                  </Link>{" "}
                </li>
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
