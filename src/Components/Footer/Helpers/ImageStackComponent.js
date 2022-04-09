import React, { useState } from "react";
// import "../../../../styles/_general/ImageStackComponent.css";

import Styles from "./ImageStackComponent.module.css";

function ImageStackComponent(props) {
  const [displayClass, setDisplayClass] = useState(
    `${Styles.NormalState} ${Styles.Img}`
  );
  const [hoverClass, setHoverClass] = useState(
    `${Styles.HoverState} ${Styles.Img}`
  );

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        Styles.Wrapper + " " + props.iconsClass + " " + props.iconsWrapperClass
      }
      onMouseOver={() => {
        setDisplayClass(`${Styles.HoverState} ${Styles.Img}`);
        setHoverClass(`{Styles.NormalState} {Styles.Img}`);
      }}
      onMouseOut={() => {
        setHoverClass(`${Styles.HoverState} ${Styles.Img}`);
        setDisplayClass(`{Styles.NormalState} {Styles.Img}`);
      }}
      style={props.StackImageStyle}
    >
      <img
        src={props.normalDisplay}
        alt="normal state"
        className={displayClass + " " + props.iconsClass}
        style={props.StackImageStyle}
      />
      <img
        src={props.hoverDisplay}
        alt="hover display"
        className={hoverClass + " " + props.iconsClass}
        style={props.StackImageStyle}
      />
    </a>
  );
}

export default ImageStackComponent;
