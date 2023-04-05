import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function NoPage() {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>BrandMobile - Error page</title>
      </Helmet>
      <div className="error-page">
        <div className="heading">
          <h1>
            Error 4{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#3b4696"
              viewBox="0 96 960 960"
              className="svg"
            >
              <path d="M479.982 776q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453 623h60V370h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
            </svg>{" "}
            4
          </h1>
        </div>
        <div className="txt">
          It seems like you have reached an invalid URL. You can use the
          navigation above, or{" "}
          <Link classname="link" to="../">
            click here to go back to HOME
          </Link>{" "}
        </div>
      </div>
    </>
  );
}

export default NoPage;
