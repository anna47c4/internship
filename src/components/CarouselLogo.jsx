import Slider from "react-slick";
import Arla from "../assets/caseAssets/arla.webp";
import BT from "../assets/caseAssets/bt.webp";
import CB from "../assets/caseAssets/carlsberg.webp";
import CK from "../assets/caseAssets/ck.webp";
import DS from "../assets/caseAssets/ds.webp";
import IMERC from "../assets/caseAssets/imerco.webp";
import PLAY from "../assets/caseAssets/play.webp";
import TIGER from "../assets/caseAssets/tiger.webp";
function CarouselLogo() {
  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="caseLogo">
            <img src={Arla} style={{ width: "100px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={BT} style={{ width: "200px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={CB} style={{ width: "200px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={CK} style={{ width: "200px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={DS} style={{ width: "200px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={IMERC} style={{ width: "200px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={PLAY} style={{ width: "200px" }}></img>
          </div>
          <div className="caseLogo">
            <img src={TIGER} style={{ width: "200px" }}></img>
          </div>
        </Slider>
      </div>
    );
  }
}
export default CarouselLogo;
