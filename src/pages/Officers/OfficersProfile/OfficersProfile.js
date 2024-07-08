import "./_officers-profile.scss";

import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const OfficersProfile = ({ data }) => {
  // const [show, setShow] = useState(false);
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const [show, setShow] = useState(false);
  return (
    <>
      <img
        onClick={() => setShow(true)}
        className="col-md-11 br col-12 profile-img"
        src={data.profileImg}
        alt="Scholar"
      />
      <div className="profile-portfolio ">
        <h6>{data.profilePortfolio}</h6>
      </div>
      <div className="port">
        <h4 className="mt1">{data.profileName}</h4>
        <small>{data.profileQualification}</small>
      </div>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          {" "}
          <Modal.Title>
            <h5>Officers Profile</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flexy col-md-10 offset-md-1">
            <div className="col-md-6 offcanvas-leaders-profile">
              <img className="col-md-12 " src={data.profileImg} alt="Scholar" />
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="col-md-12 flexy officers-profile"></div>
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
