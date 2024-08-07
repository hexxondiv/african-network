import "./_leaders-profile.scss";

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";

export const LeadersProfile = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col">
        {" "}
        <div className="col-md-12 flexy  leaders-profile">
          <div className="col-md-12 col-12" onClick={handleShow}>
            <img
              className="col-md-11 br col-12 profile-img"
              src={data.profileImg}
              alt="{data.profileName}"
            />
            <div className="profile-name ">
              <h6>{data.profilePortfolio}</h6>
            </div>
            <div className="port">
              <h4 className="mt1">{data.profileName}</h4>
              <small>{data.profileQualification}</small>
            </div>
          </div>{" "}
        </div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          {...data}
          placement="end"
          restoreFocus={true}
          className="backdropClassName"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h6>Officers Profile</h6>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="col-md-12 offcanvas-leaders-profile">
              <img className="col-md-12 " src={data.profileImg} alt="Scholar" />
              <div className="profile-portfolio ">
                <h6>{data.profilePortfolio}</h6>
              </div>
            </div>
            <div className="offcanvas-profile-name">
              <h2>{data.profileName}</h2>
              <small>{data.profileQualification}</small>
            </div>
            <div className="col-md-12 profile-body">
              {" "}
              <p className="mt1">
                <strong>{data.profileName}</strong>,{" "}
                <em> {data.profilePortfolio}</em>
              </p>
              <p className="mt3" style={{ textAlign: "justify" }}>
                {data.profileInfo}
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};
