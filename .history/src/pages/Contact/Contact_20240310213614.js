import React from "react";
import PageLinks from "../../components/PageLinks/PageLinks";
import "./contact.scss";
const Contact = () => {
  return (
    <>
      <div className="page-background">
        <div className=" mission-shadow header-wrapper">
          <div className="col-md-12 contact-banner "> </div>
          <div className=" col-md-12 after">
            <center>
              <div
                className="col-md-6 prefooter-writeup {
"
              >
                <h3>CONTACT</h3>
                <p>Please fill in the forms below to contact us.</p>
              </div>
            </center>
          </div>
        </div>
      </div>
      <PageLinks />
      <div className="col-md-8 mt offset-md-2 flexy">
        <div className="col-md-6">
          <iframe
            title="Google Maps"
            aria-label="Google Maps"
            data-src=""
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            allowfullscreen=""
            src="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/media/googleMap.ea5928de.html?defaultLocation=0&amp;showZoom=true&amp;showStreetView=true&amp;showMapType=true&amp;language=en&amp;id=dataItem-ijp2bg7t&amp;googleMapsScriptPath=%2Fservices%2Feditor-elements-library%2Fdist%2Fthunderbolt%2Fmedia%2Fgoogle-map.min.c5cac041.js&amp;origin=https%3A%2F%2Fwww.africanfamilyfirms.org"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
