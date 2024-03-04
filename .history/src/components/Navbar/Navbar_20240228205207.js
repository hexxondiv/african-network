import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
export const Navbar = () => {
  return (
    <>
      <div className="nav-main-container">
        <div className="col-md-8 offset-md-2 flexy">
          <div className="logo-div col-md-1">
            <img src={Logo} width="100%" />
          </div>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <NavLink to={}></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
