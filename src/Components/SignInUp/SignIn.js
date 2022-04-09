import React from "react";
import { useDispatch } from "react-redux";

import Styles from "./SignInUp.module.css";

import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signInData } from "../../Utils/Constants/StaticData";
import { validateEmail } from "./Helpers/ValidateEmail";
import notify from "../../Utils/Helpers/notifyToast";

function SignIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRef = React.useRef(123);

  const [isDisabled, setIsDisabled] = React.useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    const inputValidation = handleDataValidation();
    const elements = formRef.current.elements;
  };

  const handleDataValidation = () => {
    if (
      !formRef.current.elements.SignInEmail.value ||
      !validateEmail(formRef.current.elements.SignInEmail.value)
    ) {
      notify("Please enter valid Email address", "warning");
      return false;
    }

    if (formRef.current.elements.SignInPassword.value.length < 6) {
      notify("Password should be atleast 6 characters long", "warning");
      return false;
    }

    return true;
  };

  return (
    <div
      className={Styles.Wrapper}
      style={{
        transform:
          location.pathname === "/login" ? "translatex(0)" : "translatex(100%)",
      }}
    >
      <div className={Styles.UpperSection}>
        <span className={Styles.Title}>{signInData.title}</span>
        <form className={Styles.Form} onSubmit={signIn} ref={formRef}>
          <StyledMUIInput
            fullWidth
            id="SignInEmail"
            label="Email address"
            variant="standard"
            type="email"
            margin="dense"
            autoComplete="username"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="SignInPassword"
            label="Password"
            variant="standard"
            type="password"
            margin="dense"
            autoComplete="current-password"
            disabled={isDisabled}
          />
          <Button
            name="Continue"
            primaryColor="var(--primary-orange)"
            fontSize="var(--font-16)"
            wrapperClass={Styles.SignInUpButton}
            fullWidth
          />
        </form>
      </div>
      <div className={Styles.BottomSecWrapper}>
        <BottomText data={signInData} />
      </div>
    </div>
  );
}

export default SignIn;
