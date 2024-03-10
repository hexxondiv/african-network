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
              <img src={Logo} width="100%" />
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
                    <Link to={"./welcome"}>Misson & Constitution</Link>
                    <Link to={"back-to-school"}>Officers</Link>
                    <Link to={"#"}>Contact</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              {" "}
              <NavLink to={""}>Get Involed</NavLink>
            </li>

            <li className="list-inline-item">
              <NavLink to={""}>Stay Informed</NavLink>
            </li>
            <li className="list-inline-item">
              {" "}
              <NavLink to={""}>Membership</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
