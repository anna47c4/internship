import React from "react";
import WhiteLogo from "../assets/bm-white-logo.webp";
import FacebookLogo from "../assets/svg/facebook.svg";
import LinkedInLogo from "../assets/svg/linkedin.svg";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

function Footer({ clickAction, desc, className }) {
  //navigate to the contact page
  const navigate = useNavigate();
  function goToContact() {
    navigate("../contact");
  }

  return (
    <>
      <footer>
        <div className="footer-top">
          <PrimaryButton
            clickAction={goToContact}
            desc={"CONTACT US"}
            className="footer-btn"
          ></PrimaryButton>
          {/*    <div class="form-group">
            <label for="email">Let us amplify your campaigns and brand.</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="your e-mail"
            />
          </div> */}
          <img src={WhiteLogo} style={{ width: "200px" }}></img>
        </div>
        <div className="flex">
          {/* <div className="logo-line">
            <img
              src={WhiteIco}
              className="bm-ico-white"
              alt="Brandmobile white icon"
              style={{ width: "30px" }}
            ></img>
            <p>Engagement that moves your Brand.</p>
          </div> */}

          {/*    <div className="links">
            <p>Home</p>
            <p>Cases</p>
            <p>Contact</p>
          </div> */}

          <div className="info1">
            <p>Østergade 40, 4th floor.</p>
            <p>1100 Copenhagen</p>
          </div>

          <div className="info2">
            <p>Phone: +45 26 85 85 85</p>
            <p>Email: letsamplify@brandmobile.com</p>
          </div>

          <div className="info3">
            <a href="https://www.facebook.com/Brandmobileaps/" target="_blank">
              <img
                src={FacebookLogo}
                className="footer-logo"
                alt="Facebook logo"
                style={{ width: "20px" }}
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/company/brandmobile-aps/"
              target="_blank"
            >
              <img
                src={LinkedInLogo}
                className="footer-logo"
                alt="LinkedIn logo"
                style={{ width: "30px" }}
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
