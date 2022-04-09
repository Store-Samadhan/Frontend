import React from "react";
import styles from "./LandingPage.module.css";
import LowerContainer from "./LowerContainer";
import UpperContainer from "./UpperContainer";
import Footer from "./Footer";

const LandingPageMainSec = () => {
  return (
    <div className={styles.Wrapper}>
      <UpperContainer />
      <LowerContainer />
      <Footer />
    </div>
  );
};

export default LandingPageMainSec;
