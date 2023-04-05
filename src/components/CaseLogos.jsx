import React from "react";

import arlaLogo from "../assets/caseAssets/arla.webp";
import btLogo from "../assets/caseAssets/bt.webp";
import cbLogo from "../assets/caseAssets/carlsberg.webp";
import ckLogo from "../assets/caseAssets/ck.webp";
import dsLogo from "../assets/caseAssets/ds.webp";
import imercoLogo from "../assets/caseAssets/imerco.webp";
import tigerLogo from "../assets/caseAssets/tiger.webp";
import mashLogo from "../assets/caseAssets/mash-logo.webp";
function CaseLogos({ soloCase }) {
  return (
    <>
      <img
        src={mashLogo}
        alt="Brandmobile case logo"
        className="big-logo"
      ></img>
      <img
        src={tigerLogo}
        alt="Brandmobile case logo"
        className="big-logo"
      ></img>
      <img src={dsLogo} alt="Brandmobile case logo" className="big-logo"></img>
      <img src={ckLogo} alt="Brandmobile case logo" className="big-logo"></img>
      <img
        src={arlaLogo}
        alt="Brandmobile case logo"
        className="big-logo arla"
      ></img>
      <img
        src={imercoLogo}
        alt="Brandmobile case logo"
        className="big-logo"
      ></img>
      <img src={btLogo} alt="Brandmobile case logo" className="big-logo"></img>
      <img src={cbLogo} alt="Brandmobile case logo" className="big-logo"></img>
    </>
  );
}

export default CaseLogos;
