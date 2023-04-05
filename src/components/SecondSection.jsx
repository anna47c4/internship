import React from "react";
import newLeads from "../assets/new-leads.webp";
import trackers from "../assets/trackers.webp";
function SecondSection() {
  return (
    <>
      <div className="second-box wrap">
        <section className="secondSection">
          <div className="text center-place-dir col1">
            <div className="txt">
              <h2>
                We can get you <span className="color-change">new leads</span>{" "}
                or <span className="color-change">add value</span> to{" "}
                <span className="color-change">your existing ones.</span>
              </h2>
              <p>
                We call it “Dynamic Lead Management” a Sales Automation
                integrated solution. We combine multiple consumer journeys and
                support both known customers as well as new.
              </p>
            </div>
            <div>
              <img
                src={newLeads}
                className="img"
                alt="Brandmobile new leads"
              ></img>
            </div>
          </div>

          <div className="text center-place-dir col2">
            <div className="heading">
              <h2>
                Everything is done in real time{" "}
                <span className="color-change">delivering all the stats</span>{" "}
                and <span className="color-change">KPI trackers</span> you need.
              </h2>
            </div>
            <div>
              <img
                src={trackers}
                className="img"
                alt="Brandmobile new leads"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SecondSection;
