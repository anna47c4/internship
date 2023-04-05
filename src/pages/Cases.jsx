import BmCases from "../components/BmCases";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import WhiteIcon from "../assets/bm-ico-white.webp";
function Cases({ caseData }) {
  /*   console.log(caseData); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>BrandMobile - Cases</title>
        <meta name="description" content="BrandMobile cases" />
        <meta
          name="keywords"
          content="Webdesign, Platform, Concept, Development"
        />
      </Helmet>
      <div className="case-page-wrapper">
        <section className="caseHeroSection">
          <div className="caseHeroText center-place-dir">
            <p>
              {" "}
              <img
                src={WhiteIcon}
                className="bm-ico-white"
                alt="Brandmobile white icon"
                style={{ width: "20px" }}
              ></img>
              Engagement that moves your Brand.
            </p>
            <h1>
              Some cases for your <br></br> inspiration
            </h1>
          </div>
        </section>
        <main>
          <section className="caseSection">
            <div className="case-container">
              {caseData.map((soloCase, index) => (
                <BmCases key={index} soloCase={soloCase}></BmCases>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cases;
