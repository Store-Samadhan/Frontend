import React from "react";
import { Link } from "react-router-dom";

import styles from "./SecondaryFooter.module.css";

import { SECONDARY_FOOTER_DATA } from "./../../Utils/Constants/StaticData";

function SecondaryFooter() {
  return (
    <div className={styles.Wrapper}>
      <span className={styles.Text}>
        {SECONDARY_FOOTER_DATA.title}{" "}
        <Link to={SECONDARY_FOOTER_DATA.linkTo} className={styles.Link}>
          {SECONDARY_FOOTER_DATA.linkText}
        </Link>
      </span>
    </div>
  );
}

export default SecondaryFooter;
