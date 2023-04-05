import React from "react";
import CJ from "../assets/customer-journey.webp";
import InfoCards from "./InfoCards";

function FifthSection() {
  return (
    <>
      <section className="fifthSection">
        <div className="col1">
          <div className="text">
            <h2>Customer journey.</h2>
            <p>
              We always define the complete user journey from the activation
              touch point to the retail or online store. All consumer signals
              are used to optimize an immersive branded personal consumer
              experience.
            </p>
          </div>
          <div className="center-place img-container">
            <img
              src={CJ}
              className="img"
              alt="Customer journey illustration"
            ></img>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text" style={{ textAlign: "center" }}>
            <h2>
              Everything’s custom <span className="color-change">tailored</span>{" "}
              and tweakable.
            </h2>
            <p>
              We are extremely passionate and agile in our development process.
              If you have any wishes you can always ask for more. We love
              challenges. And it all literally happens in Denmark. Not in
              Belarus or Vietnam. This adds speed, high quality and excellence
              in execution.
            </p>
          </div>
        </div>
        <InfoCards></InfoCards>
      </section>
    </>
  );
}

export default FifthSection;
