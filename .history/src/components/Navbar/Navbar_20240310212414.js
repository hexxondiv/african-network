import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
export const Navbar = () => {
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
                        <Link to={"/mission"}>Misson & Constitution</Link>
                      </li>
                      <li>
                        <Link to={"/officers"}>Officers</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Anti Harrassment Policy</Link>
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
                        <Link to={"./welcome"}>Membership</Link>
                      </li>
                      <li>
                        <Link to={"back-to-school"}>Conferences</Link>
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
                        <Link to={"./welcome"}>News & Announcements</Link>
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
