import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UpperContainer.module.css";
import Container from "../../../Assets/LandingPage/Container.svg";
import Logo from "../../../Assets/General/Logo.svg";
import Button from "./../../Button";
import { ReactComponent as Arrow } from "../../../Assets/General/Arrow.svg";

const heading = "Find a Pocket-Friendly place for your goods";

const UpperContainer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Wrapper}>
      <img src={Logo} alt="Logo" className={styles.Logo} />
      <h2 className={styles.Heading}>{heading}</h2>
      <div className={styles.ButtonWrapper}>
        <Button
          name="Get Started"
          withIcon
          IconComp={Arrow}
          onClick={() => {
            navigate("/signup");
          }}
          inverted
          reverseFlex
          primaryColor="var(--sec-black)"
        />
        <Button
          name="Login"
          onClick={() => {
            navigate("/login");
          }}
          primaryColor="var(--sec-black)"
          empty
        />
      </div>
      <img src={Container} alt="Container Img" className={styles.Container} />
    </div>
  );
};

export default UpperContainer;
