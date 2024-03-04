import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
export const Navbar = () => {
  return (
    <>
      <div className="nav-main-container fixed-top">
        <div className="col-md-8 offset-md-2 flexy nav-inner">
          <div className="logo-div col-md-1">
            <img src={Logo} width="100%" />
          </div>
          <ul className="list-unstyled list-inline offset-md-2">
            <li className="list-inline-item">
              <NavLink to={""}>Home</NavLink>
              <NavLink to={""}>About</NavLink>
              <NavLink to={""}>Get Involed</NavLink>
              <NavLink to={""}>Stay Informed</NavLink>
              <NavLink to={""}>Membership</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
