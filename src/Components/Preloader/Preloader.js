import React, { useEffect } from "react";

import Styles from "./Preloader.module.css";

import prelaoderImg from "../../Assets/General/Preloader.gif";

function Preloader({ transperant }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className={Styles.Wrapper}
      style={
        transperant && {
          background: "none",
        }
      }
    >
      <img src={prelaoderImg} alt="" className={Styles.Loader} />
    </div>
  );
}

export default Preloader;
