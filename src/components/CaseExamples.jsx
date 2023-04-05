import React from "react";
import testVideo from "../assets/video/video-test.mp4";
import cbVideo from "/images/cb-result.webm";
import CB from "../assets/caseAssets/carlsberg.webp";
import dsVideo from "/images/ds-casino-result.webm";
import DS from "../assets/caseAssets/ds.webp";
import ckVideo from "/images/circkle-k-result.webm";
import CK from "../assets/caseAssets/ck.webp";
function CaseExamples() {
  return (
    <>
      <div className="case-videos">
        <div className="video-logo-group">
          <div className="phone-container">
            <video autoPlay muted loop src={cbVideo}></video>
          </div>
          <div className="img-container">
            <img src={CB} style={{ width: "100px" }} alt="Carlsberg logo"></img>
          </div>
        </div>

        <div className="video-logo-group">
          <div className="phone-container">
            <video autoPlay muted loop src={dsVideo}></video>
          </div>
          <div className="img-container">
            <img
              src={DS}
              style={{ width: "100px" }}
              alt="Danske spil logo"
            ></img>
          </div>
        </div>

        <div className="video-logo-group">
          <div className="phone-container">
            <video autoPlay muted loop src={ckVideo}></video>
          </div>
          <div className="img-container">
            <img src={CK} style={{ width: "100px" }} alt="Circkle k logo"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseExamples;
