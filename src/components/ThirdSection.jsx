import React from "react";
import { useNavigate } from "react-router-dom";
import ColaCase from "../assets/phone-cola.webp";
import CaseExamples from "./CaseExamples";
import PrimaryButton from "./PrimaryButton";
function ThirdSection() {
  //navigate to the case page
  const navigate = useNavigate();
  function goToCases() {
    navigate("../cases");
  }
  return (
    <>
      <section className="thirdSection">
        <div className="text center-place-dir col1">
          <div className="txt">
            <h2>
              We build <span className="color-change">bespoke solutions</span>{" "}
              based on <span className="color-change">tried techniques.</span>
            </h2>
            <p>
              We deliver millions of personal branded experiences globally. We
              don´t believe in “one size fits all” experiences. That is why we
              generate better results.
            </p>
          </div>

          <div>
            <img
              src={ColaCase}
              className="img"
              alt="Brandmobile Circle K case"
            ></img>
          </div>
        </div>
        <div className="case-container">
          <div className="text case-examples">
            <div className="heading-container">
              <h2>
                Here are <span className="color-change">some of our </span>
                cases. We can always make something{" "}
                <span className="color-change">special</span> for your needs.
              </h2>
            </div>
            <div>
              <PrimaryButton
                clickAction={goToCases}
                desc={"SEE CASES"}
              ></PrimaryButton>
            </div>
          </div>
          <CaseExamples></CaseExamples>
        </div>
      </section>
    </>
  );
}

export default ThirdSection;
