import React from "react";

import styles from "./Button.module.css";

function Button({
  name,
  onClick,
  primaryColor,
  inverted,
  wrapperClass,
  id,
  withIcon,
  IconComp,
  iconClass,
  hoverBgColor,
  hoverColor,
  reverseFlex,
  empty,
  fullWidth,
}) {
  return (
    <button
      id={id}
      className={
        styles.Button +
        " " +
        (inverted || empty ? styles.Inverted : "") +
        " " +
        (empty ? styles.Empty : "") +
        " " +
        wrapperClass
      }
      style={{
        "--main-color": primaryColor,
        "--main-hover-bg-color": hoverBgColor ? hoverBgColor : "none",
        "--main-hover-color": hoverColor ? hoverColor : primaryColor,
        flexDirection: reverseFlex ? "row-reverse" : "row",
        width: fullWidth ? "100%" : "fit-content",
      }}
      onClick={onClick}
    >
      {withIcon && <IconComp className={styles.Icon + " " + iconClass} />}{" "}
      {name}
    </button>
  );
}

export default Button;
