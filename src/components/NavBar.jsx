import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
import Hamburger from "./Hamburger";
import WhiteLogo from "../assets/bm-white-logo.webp";
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false); //state der styrer om burgermenuen er åben eller ikke
  //toggle mellem åben og lukket state (i 'Hamburger' component returnes der enten burger eller kryds ikon,
  //og på baggrund af 'hamburgerOpen' ved .navigation ul om den skal display flex, eller diaplay none, nede i JSX stylingen.
  //click outide menu ref
  const dropdownAreaRef = useRef(null);
  //useEffect
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //track the btn and close menu on click outside
  const handleClickOutside = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(dropdownAreaRef.current)) {
      setHamburgerOpen(false);
    }
  };

  //function der fører til at menuen lukker efter man har klikket sig ind på et menupunkt
  function isClicked() {
    const [itemClicked, setItemClicked] = useState(true);

    let className = "menu";
    if (itemClicked) {
      className += "clickedMenu";
    }

    return (
      <>
        <ul className={className}></ul>
      </>
    );
  }
  //navigate to the home page when the logo is clicked
  const navigate = useNavigate();
  function goToHome() {
    navigate("../");
  }
  return (
    <>
      <div className="topOnNav">
        <div>
          <img
            className="bm-white-logo"
            src={WhiteLogo}
            alt="Brandmobile white logo"
            style={{ width: "200px" }}
            onClick={goToHome}
          ></img>
          <button
            className="hamburger"
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
            ref={dropdownAreaRef}
          >
            <Hamburger isOpen={hamburgerOpen} />
          </button>
        </div>
      </div>
      <nav className="navigation">
        <Media
          query="(min-width: 767px)"
          render={() => (
            <img
              className="bm-white-logo-desk"
              src={WhiteLogo}
              alt="Brandmobile white logo"
              style={{ width: "200px" }}
              onClick={goToHome}
            ></img>
          )}
        />
        <ul>
          <li>
            <Link onClick={isClicked} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={isClicked} to="/cases">
              CASES
            </Link>
          </li>
          <li>
            <Link onClick={isClicked} to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx="true">{`
        .navigation {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
        }
        .navigation ul {
          display: flex;
          margin: 0;
          margin-top: 20px;
          margin-right: 20px;
          padding: 0;
          overflow: hidden;
          gap: 6px;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }
        .bm-white-logo-desk {
          margin-left: 20px;
        }
        @media (min-width: 767px) {
          .bm-white-logo {
            display: none;
            visibility: hidden;
          }
          .hamburger {
            display: none;
          }
        }
        @media (max-width: 767px) {
          .hamburger {
            display: flex;
            float: right;
          }
          .navigation {
            padding-top: 1rem;
            display: flex;
            flex: 1 1 100%;
            flex-flow: column;
          }
          .navigation ul {
            display: ${hamburgerOpen ? "flex" : "none"};
            border-top: 0.5px solid white;
            flex-flow: column;
            padding-top: 2rem;
            padding-left: 12px;
            padding-bottom: 2rem;
            margin-right: 0px;
            gap: 15px;
            background-color: white;
          }
          .navigation ul li {
            padding-bottom: 8px;
            border-bottom: 1px solid Lavender;
          }
          .navigation ul li a {
            color: black;
          }
          .clickedMenu {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
