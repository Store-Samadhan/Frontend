import React from "react";
import styles from "./LowerContainer.module.css";
import LowerContainerStore from "../../../Assets/LandingPage/LowerContainerStore.svg";
import LowerDots from "../../../Assets/LandingPage/LowerDots.svg";

const heading =
  "Every inch of a vacant place can generate money by storing goods";

const LowerContainer = () => {
  return (
    <div className={styles.Wrapper}>
      <img src={LowerDots} className={styles.LowerDots} />
      <div className={styles.LowerContainerWrapper}>
        <img
          src={LowerContainerStore}
          alt="Lower Container Store"
          className={styles.LowerContainerStore}
        />
      </div>
      <h2 className={styles.Heading}>
        <span className={styles.Heading}>{heading}</span>
      </h2>
    </div>
  );
};

export default LowerContainer;
