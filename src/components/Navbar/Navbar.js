import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

import Logo from "../../assets/images/logo.png";
import MobileAccordion from "./MobileAccordion/MobileAccordion";
import {API_URL} from "../../config";
export const Navbar = () => {
  const [isHome, setIsHome] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [showActive, setShowActive] = useState(false);
  const location = useLocation();
  const setThisHome = () => {
    // console.log(location.pathname === "/");
    setIsHome(location.pathname === "/" && scrollPosition <= 200);
    // console.log(isHome);
  };
  const setThisShowActive = () => {
    setShowActive(false);
  };
  useEffect(() => {
    // console.log(location.pathname);
    // setThisHome();
    setThisShowActive();
  }, [location]);

  useEffect(() => {
    // console.log(showActive);
    setThisHome();
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(scrollPosition);
  };
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setScrollDirection(1);
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setScrollDirection(-1);
    }
    setY(window.scrollY);
    handleScroll();
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    setShowActive(isChecked);
  };
  return (
    <>
      <div
        className={`nav-main-container  col-md-12 ${isHome ? "home" : ""} ${
          scrollPosition >= 10 && scrollDirection < 0 ? "hide" : ""
        }`}
      >
        <div className=" offset-md-1 flexy nav-inner col-md-10">
          <div className="logo-div col-md-1">
            <Link to={"/"}>
              {" "}
              <img src={Logo} width="90%" alt={""} />
            </Link>
          </div>
          <ul className="list-unstyled list-inline offset-md-2 main-links">
            <li className="list-inline-item ">
              <NavLink to={""} className="home-btn">
                Home
              </NavLink>{" "}
            </li>
            <li className="list-inline-item">
              {" "}
              <div className="dropdown ">
                <button class="dropbtn">About</button>
                <div className="dropdown-content ">
                  <div className="content2 ">
                    <ul className="list-unstyled ">
                      <li>
                        {" "}
                        <Link to={"/who-we-are"}>Who we are</Link>
                      </li>{" "}
                      <li>
                        {" "}
                        <Link to={"/mission"}>Mission & Constitution</Link>
                      </li>
                      <li>
                        <Link to={"/officers"}>Officers</Link>
                      </li>{" "}
                      <li>
                        <Link to={"/members"}>Members</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              {" "}
              <div className="dropdown ">
                <button class="dropbtn">Get Involved</button>
                <div className="dropdown-content ">
                  <div className="content2 ">
                    <ul className="list-unstyled ">
                      <li>
                        {" "}
                        <Link to={"/membership"}>Membership</Link>
                      </li>
                      <li>
                        <Link to={"/events-page"}>Events</Link>
                      </li>
                      {/*<li>*/}
                      {/*  <Link to={"#"}>Jobs & Fellowships</Link>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="list-inline-item">
              <div className="dropdown ">
                <button class="dropbtn">Publications</button>
                <div className="dropdown-content ">
                  <div className="content2 ">
                    <ul className="list-unstyled ">
                      <li>
                        <a 
    href={API_URL} 
    target="_blank" 
    rel="noopener noreferrer"
    className="dropdown-item"
  >NEAD Journal</a>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/news-page"}>News & Announcements</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item ">
              <NavLink to={"/contact"} className="home-btn">
                Contact
              </NavLink>{" "}
            </li>

          </ul>
          <Link to={"/join-us"}>
            {" "}
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </div>
      <ul className="nav-links col-md-12 list-unstyled">
        <div className="mobile-menu col-md-12 ">
          {" "}
          <div className="nav-div">
            <Link to={"/"}>
              {" "}
              <img
                className="col-md-2 col-2 ml2 mobile-logo"
                src={Logo}
                alt="Scholar"
              />
            </Link>
            <input
              type="checkbox"
              id="hamburger1"
              checked={showActive}
              onChange={(e) => handleChange(e)}
            />
            <label for="hamburger1" className="buga"></label>
            <ul className="nav-links col-md-12 list-unstyled">
              <li>
                <MobileAccordion />
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </>
  );
};
