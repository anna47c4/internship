import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import Footer from "../components/Footer";
import CaseLogos from "../components/CaseLogos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Media from "react-media";

function SoloProject({ caseData }) {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  /*   console.log(location.state); */
  let theCase;
  caseData.map((soloCase) => {
    if (soloCase.id === location.state.caseId) {
      theCase = soloCase;
    }
  });

  //navigate to the contact page
  const navigate = useNavigate();
  function goToContact() {
    navigate("../contact");
  }

  //shared class for images
  const imgclass = `img-data ${theCase.company} ${theCase.id}`;
  //for putting the heroimg as background on big screen
  let style = {
    backgroundImage: "url(" + theCase.heroimg + ")",
    backgroundSize: "cover",
  };
  return (
    <>
      <Helmet>
        <title>BrandMobile - Case</title>
        <meta name="description" content="BrandMobile case" />
        <meta
          name="keywords"
          content="Webdesign, Platform, Concept, Development"
        />
      </Helmet>
      <section className="soloSection">
        <div className="top-wrapper">
          <Media
            query="(min-width: 767px)"
            render={() => <div className="top-img box" style={style}></div>}
          />
          <Media
            query="(max-width: 767px)"
            render={() => (
              <div className="top-img">
                {theCase.heroimg && (
                  <img
                    src={theCase.heroimg}
                    alt={theCase.company}
                    className={imgclass}
                  ></img>
                )}
              </div>
            )}
          />
          {/*  <div className="top-img box">
            {!theCase.heroimg && (
              <video
                src={theCase.herovideo}
                alt={theCase.company}
                className={imgclass}
                autoPlay
                muted
                loop
              ></video>
            )}
            {theCase.heroimg && (
              <img
                src={theCase.heroimg}
                alt={theCase.company}
                className={imgclass}
              ></img>
            )}
          </div> */}
          <div className="right-wrapper">
            <div className="top-container">
              <div className="logo">
                {theCase.logo && (
                  <img
                    src={theCase.logo}
                    alt={theCase.company}
                    className={theCase.id}
                  ></img>
                )}
              </div>
              <div className="story">
                <p style={{ textTransform: "uppercase" }}>{theCase.story}</p>
              </div>
            </div>
            <div className="case-txt">
              <h1>{theCase.intro}</h1>
              <p className="break-line">{theCase.longdesc}</p>
            </div>
            <div className="btn">
              <PrimaryButton
                desc={"GET IN TOUCH"}
                clickAction={goToContact}
              ></PrimaryButton>
            </div>
          </div>
        </div>
        <div className="numbers"></div>
        <div className="result-wrapper">
          {/*   {!theCase.video && (
            <img className={theCase.id} src={theCase.mainimg}></img>
          )} */}
          <div className="case-video">
            <div className="phone-container">
              <video autoPlay muted loop src={theCase.video}></video>
            </div>
          </div>
          <div className="results">
            {theCase.results.resulttitle.map((title, i) => (
              <div>
                <div className="ico-txt-group">
                  <img src={theCase.results.resultico[i]}></img>
                  <p>{title}</p>
                </div>
                <p>{theCase.results.resulttext[i]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="wrapper">
          <div className="txt">
            <h2>We have worked with some of the top brands across the globe</h2>
            <p>And we would love to help you too</p>
          </div>
          <Media
            query="(min-width: 767px)"
            render={() => (
              <div className="logo-container-desk">
                <div className="inner-container">
                  <div className="mash"></div>
                  <div className="ft"></div>
                  <div className="ds"></div>
                  <div className="ck"></div>
                  <div className="arla"></div>
                  <div className="imerco"></div>
                  <div className="bt"></div>
                  <div className="cb"></div>
                </div>
              </div>
            )}
          />
          <Media
            query="(max-width: 767px)"
            render={() => (
              <div className="logo-container">
                <CaseLogos></CaseLogos>
              </div>
            )}
          />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SoloProject;
