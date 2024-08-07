import React from "react";
import "./_mobile-accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link, NavLink } from "react-router-dom";

const MobileAccordion = () => {
  return (
    <div className="col-md-12 mobile-accordion ">
      <NavLink to={"/"} className="home-link">
        Home
      </NavLink>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <small>About</small>
          </Accordion.Header>
          <Accordion.Body>
            {" "}
            <ul className="list-unstyled">
              {" "}
              <li>
                <Link to={"/who-we-are"} className="mobile-navs">
                  Who we are
                </Link>{" "}
              </li>
              <li>
                <Link to={"/mission"} className="mobile-navs">
                  Mission & Constitution
                </Link>{" "}
              </li>
              <li>
                <Link to={"/officers"} className="mobile-navs">
                  Officers
                </Link>{" "}
              </li>
              <li>
                <Link to={"/members"} className="mobile-navs">
                  Members
                </Link>
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

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <small>Get Involved</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                <Link to={"/membership"} className="mobile-navs">
                  Membership
                </Link>
              </li>{" "}
              <li>
                <Link to={"/events-page"} className="mobile-navs">
                  Events
                </Link>
              </li>{" "}
              <li>
                <Link to={"/jobs"} className="mobile-navs">
                  Jobs & Fellowships
                </Link>
              </li>{" "}
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <small>Stay Informed</small>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                <Link to={"/news-page"} className="mobile-navs">
                  News & Announcements
                </Link>
              </li>
              <li>
                <Link to={"/archives"} className="mobile-navs">
                  Archives
                </Link>
              </li>
              <li>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <small>Publications</small>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={"/journal-of-edu"} className="mobile-navs">
                          Journal of Ag Education
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to={"/events-page"} className="mobile-navs">
                          National Research Value Statements
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to={"/jobs"} className="mobile-navs">
                          Journal of Education Statistics
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to={"/jobs"} className="mobile-navs">
                          Journal of Banking & Finance
                        </Link>
                      </li>{" "}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <NavLink to={"/join-us"}>
          {" "}
          <button className="register-btn2">Register</button>
        </NavLink>
      </Accordion>
    </div>
  );
};
export default MobileAccordion;
