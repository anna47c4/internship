import WhiteIcon from "../assets/bm-ico-white.webp";
import PlaceHolder from "../assets/bm-placeholder.png";
import bmWork from "../assets/bm-work.webp";
function HeroSection() {
  return (
    <>
      <div className="hero-box">
        <section className="heroSection">
          <div className="wrap">
            <div className="heroText center-place-dir">
              <h1>
                <img
                  src={WhiteIcon}
                  className="bm-ico-white"
                  alt="Brandmobile white icon"
                  style={{ width: "30px" }}
                ></img>
                We build bridges between brands and people.
              </h1>
              <p>And we do it quite well.</p>
            </div>
            <div className="heroImg center-place-dir">
              <img
                src={bmWork}
                className="bm-splash"
                alt="Brandmobile work"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
