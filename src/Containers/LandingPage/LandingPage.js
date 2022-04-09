import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Styles from "./LandingPage.module.css";

import SignIn from "./../../Components/SignInUp/SignIn";
import SignUp from "./../../Components/SignInUp/SignUp";
import { useSelector } from "react-redux";
import LandingPageMainSec from "./../../Components/LandingPage/LandingPageMainSec";

function LandingPage() {
  const Location = useLocation();
  const navigate = useNavigate();

  const signInUpWrapperRef = React.useRef(123);

  const handleBgOnClick = (e) => {
    if (signInUpWrapperRef.current === e.target) {
      navigate("/");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Escape") {
      if (Location.pathname != "/") {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div>
        <LandingPageMainSec />
      </div>
      <div
        ref={signInUpWrapperRef}
        className={Styles.SignInUpWrapper}
        onClick={handleBgOnClick}
        style={{
          background: Location.pathname != "/" ? "rgba(0, 0, 0, 0.4)" : "none",
          pointerEvents: Location.pathname != "/" ? "all" : "none",
        }}
      >
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}

export default LandingPage;
