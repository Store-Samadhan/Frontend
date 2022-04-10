import React from "react";
import styles from "./UpperSection.module.css";
import ErrorImage from "../../../Assets/ErrorPage/errorAssest.svg";

const UpperSection = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <img src={ErrorImage} className={styles.ErrorImage} />
        <div className={styles.ErrorText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          malesuada justo, at euismod nisi pretium fames turpis. Vel at ipsum
          augue nibh.
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
