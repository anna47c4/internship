import React from "react";
import Media from "react-media";
import CarouselLogo from "./CarouselLogo";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
import BrandEngagement from "../assets/brand-engagement-sort.webp";
import BlueIcon from "../assets/bm-ico-blue.webp";
import ScratchWin from "../assets/scratch-win.webp";
import CarouselLogoDesk from "./CarouselLogoDesk";

function FirstSection() {
  //navigate to the case page
  const navigate = useNavigate();
  function goToCases() {
    navigate("../cases");
  }
  return (
    <>
      <section className="firstSection">
        <Media
          query="(min-width: 767px)"
          render={() => <CarouselLogoDesk></CarouselLogoDesk>}
        />
        <Media
          query="(max-width: 767px)"
          render={() => <CarouselLogo></CarouselLogo>}
        />
        <div className="text firstSectionTxt center-place-grid">
          <div className="col1">
            <h2>We create meaningful brand engagement</h2>
            <p>
              And at the same time we tap into both Martech and Sales automation
              platforms, generating over the top industry benchmark results.
            </p>
            <PrimaryButton
              clickAction={goToCases}
              desc={"SEE CASES"}
              className="btn"
            ></PrimaryButton>
          </div>
          <div className="brandEngagement center-place img-container">
            <img
              src={BrandEngagement}
              className="brand-engagement"
              alt="Brandmobile brand engagement"
            ></img>
          </div>
        </div>

        <div className="text firstSectionTxt2 center-place-grid">
          <div className="col2">
            <h2>We can lead traffic anywhere.</h2>
            <div className="traffic-leads">
              <p>
                <img
                  src={BlueIcon}
                  className="blueIcon"
                  alt="Brandmobile blue icon"
                  style={{ width: "12px" }}
                ></img>
                To your website
              </p>
              <p>
                <img
                  src={BlueIcon}
                  className="blueIcon"
                  alt="Brandmobile blue icon"
                  style={{ width: "12px" }}
                ></img>
                To your campaign
              </p>
              <p>
                <img
                  src={BlueIcon}
                  className="blueIcon"
                  alt="Brandmobile blue icon"
                  style={{ width: "12px" }}
                ></img>
                To physical locations
              </p>
            </div>
            <PrimaryButton
              clickAction={goToCases}
              desc={"LEARN MORE"}
            ></PrimaryButton>
          </div>
          <div className="center-place">
            <img
              src={ScratchWin}
              className="scratch-win-img"
              alt="Brandmobile work for Circle K"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstSection;
