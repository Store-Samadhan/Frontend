import React, { useState } from "react";
import Styles from "./ImageStack.module.css";

function ImageStack({ link, normalDisplay, hoverDisplay }) {
  const [displayClass, setDisplayClass] = useState(
    `${Styles.NormalState} ${Styles.Img}`
  );
  const [hoverClass, setHoverClass] = useState(
    `${Styles.HoverState} ${Styles.Img}`
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={Styles.Wrapper}
      onMouseOver={() => {
        setDisplayClass(`${Styles.HoverState} ${Styles.Img}`);
        setHoverClass(`${Styles.NormalState} ${Styles.Img}`);
      }}
      onMouseOut={() => {
        setHoverClass(`${Styles.HoverState} ${Styles.Img}`);
        setDisplayClass(`${Styles.NormalState} ${Styles.Img}`);
      }}
    >
      <div className={displayClass}>{normalDisplay}</div>
      <div className={hoverClass}>{hoverDisplay}</div>
    </a>
  );
}

export default ImageStack;
