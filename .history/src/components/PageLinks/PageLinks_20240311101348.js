import React from "react";
import { NavLink } from "react-router-dom";
import "./page-links.scss";
const PageLinks = () => {
  return (
    <div className="quick-links ">
      <ul className="list-unstyled list-inline offset-md-2">
        <li className="list-inline-item">
          <NavLink to={"/news-page"}>News & Announcement</NavLink>
          <NavLink>Join or Renew</NavLink>
          <NavLink to={"contact"}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PageLinks;
