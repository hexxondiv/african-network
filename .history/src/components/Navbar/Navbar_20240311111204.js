import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const location = useLocation();
  const setThisHome = () => {
    // console.log(location.pathname === "/");
    setIsHome(location.pathname === "/" && scrollPosition <= 200);
    // console.log(isHome);
  };
  return (
    <>
      <div className="nav-main-container fixed-top">
        <div className=" offset-md-2 flexy nav-inner">
          <div className="logo-div col-md-1">
            <Link to={"/"}>
              {" "}
              <img src={Logo} width="70%" />
            </Link>
          </div>
          <ul className="list-unstyled list-inline offset-md-2">
            <li className="list-inline-item">
              <NavLink to={""}>Home</NavLink>{" "}
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
                        <Link to={"/mission"}>Misson & Constitution</Link>
                      </li>
                      <li>
                        <Link to={"/officers"}>Officers</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
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
                      <li>
                        <Link to={"#"}>Jobs & Fellowships</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="list-inline-item">
              <div className="dropdown ">
                <button class="dropbtn">Stay Informed</button>
                <div className="dropdown-content ">
                  <div className="content2 ">
                    <ul className="list-unstyled ">
                      <li>
                        {" "}
                        <Link to={"/news-page"}>News & Announcements</Link>
                      </li>
                      <li>
                        <Link to={"back-to-school"}>Archives</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Publications</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
