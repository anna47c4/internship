import React from "react";
import allCases from "../allcases.json";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import SoloProject from "../pages/SoloProject";
import { Link } from "react-router-dom";

function BmCases({ soloCase }) {
  const caseData = allCases;
  let solo;
  /*   const navigate = useNavigate; */
  /*   function getThisCase(e) {
    solo = e.target.parentElement.id;
    navigate("../soloProject", { state: { name: solo } });
  } */
  /*   function goToCase() {
    caseData.map((entry) => <Link to={`../soloProject/${entry.id}`}></Link>);
  } */
  //
  const navigate = useNavigate();
  function goToCase() {
    navigate(`../soloproject/${soloCase.id}`, {
      state: { caseId: soloCase.id },
    });
  }
  let style = {
    backgroundImage: "url(" + soloCase.img + ")",
  };
  return (
    <>
      <div className="case" style={style} id={soloCase.id}>
        <p>{soloCase.company}</p>
        <h2>{soloCase.title}</h2>
        <p>{soloCase.desc}</p>
        <PrimaryButton
          desc={"SEE THE CASE"}
          className="case-btn"
          clickAction={goToCase}
        ></PrimaryButton>
      </div>
    </>
  );
}

export default BmCases;
