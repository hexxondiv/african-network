import "./_leaders-profile.scss";

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useRef, useEffect } from "react";

export const LeadersProfile = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-12 flexy  leaders-profile">
        <div className="col-md-12 col-4" onClick={handleShow}>
          <img
            className="col-md-11 br col-12 "
            src={props.profileImg}
            alt="Scholar"
          />
          <div className="profile-name ">
            <h6>{props.profilePortfolio}</h6>
          </div>
          <h4 className="mt3">{props.profileName}</h4>
          <small>{props.profileQualification}</small>
        </div>{" "}
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        placement="end"
        restoreFocus={true}
        scroll={false}
        className="backdropClassName"
      >
        {/* <Offcanvas.Header closeButton className="mt7"></Offcanvas.Header> */}

        <Offcanvas.Body>
          <div className="col-md-12 offcanvas-leaders-profile">
            <img className="col-md-12 " src={props.profileImg} alt="Scholar" />
            <div className="profile-portfolio ">
              <h6>{props.profilePortfolio}</h6>
            </div>
          </div>
          <div className="offcanvas-profile-name">
            <h2>{props.profileName}</h2>
            <small>{props.profileQualification}</small>
          </div>
          <div className="col-md-12 profile-body">
            {" "}
            <p className="mt5">
              <strong>{props.profileName}</strong>,{" "}
              <em> {props.profilePortfolioInner}</em>
            </p>
            <p className="mt3">{props.profileInfo}</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
