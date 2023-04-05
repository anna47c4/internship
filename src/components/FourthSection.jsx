import React from "react";
import DataImg from "../assets/1st-data.webp";
import DataImg2 from "../assets/3rd-data.webp";
function FourthSection() {
  return (
    <>
      <section className="fourthSection">
        <div className="col1">
          <div className="text">
            <p className="p">In our equation we also include</p>
            <p className="data-focus">1st party data.</p>
            <p>
              We can structure the personal customer experience based on
              information collected in real time or via 1. party data. This
              makes our solutions more intelligent and dynamic.
            </p>
          </div>
          <div className="center-place img-container">
            <img src={DataImg} className="img" alt="first party data"></img>
          </div>
        </div>
        <div className="col2">
          <div className="text">
            <p className="p">On top of 1st party data we also include</p>
            <p className="data-focus">3rd party data.</p>
            <p>
              We can structure the customer experience blending in real time 3rd
              party data from various external data sources. This makes our
              solutions even more personal and relevant.
            </p>
          </div>
          <div className="center-place img-container2">
            <img src={DataImg2} className="img2" alt="third party data"></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default FourthSection;
