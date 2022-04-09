import React from "react";

import Styles from "./BottomText.module.css";

import { Link } from "react-router-dom";

function BottomText({ data }) {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.TextBlack}>
        {data.bottomContent.upperText.title}
        <Link
          className={Styles.TextOrange}
          to={`${data.bottomContent.upperText.linkTo}`}
        >
          {data.bottomContent.upperText.link}
        </Link>
      </div>
      <hr className={Styles.BorderLine} />
      <div className={Styles.TextBlack}>
        {data.bottomContent.bottomText.title}
        <Link
          className={Styles.TextOrange}
          to={`${data.bottomContent.bottomText.linkTo}`}
        >
          {data.bottomContent.bottomText.link}
        </Link>{" "}
        and
        <Link
          className={Styles.TextOrange}
          to={`${data.bottomContent.bottomText.linkTo2}`}
        >
          {data.bottomContent.bottomText.link2}
        </Link>
      </div>
    </div>
  );
}

export default BottomText;
