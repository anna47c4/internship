import React from "react";
import LightIco from "../assets/svg/light-ico.svg";
import SettingIco from "../assets/svg/settings-ico.svg";
import PhoneIco from "../assets/svg/phone-ico.svg";
import ResultIco from "../assets/svg/results-ico.svg";
import PlayIco from "../assets/svg/play-ico.svg";
import KeyIco from "../assets/svg/key-ico.svg";
function InfoCards() {
  return (
    <>
      <div className="info-cards">
        <article className="card">
          <img src={LightIco} alt="icon"></img>
          <h3>Tailored UX</h3>
          <p>
            Our solutions are taking advance of new mobile technologies and
            evolves everyday.
          </p>
        </article>
        <article className="card">
          <img src={SettingIco} alt="icon"></img>
          <h3>Tailored Brand identity</h3>
          <p>
            We are extremely passionate about the details and respect the brands
            DNA.
          </p>
        </article>
        <article className="card">
          <img src={PhoneIco} alt="icon"></img>
          <h3>Mobile First</h3>
          <p>
            Our solutions is always mobile first – but we also support other
            digital platforms.
          </p>
        </article>
        <article className="card">
          <img src={ResultIco} alt="icon"></img>
          <h3>Live results</h3>
          <p>
            Our campaigns can be monitored in real-time. From activation media
            channels to actual store visits.
          </p>
        </article>
        <article className="card">
          <img src={PlayIco} alt="icon"></img>
          <h3>Adjust in realtime</h3>
          <p>
            Our platforms is flexible and agile – adding new features on the fly
            meeting your expectations and requirements.
          </p>
        </article>
        <article className="card">
          <img src={KeyIco} className="rotate" alt="icon"></img>
          <h3>Safe & Sound</h3>
          <p>
            We deliver secure solutions to major brands and are frequently
            tested by external experts to prevent uintended penetration into our
            data systems.
          </p>
        </article>
      </div>
    </>
  );
}

export default InfoCards;
