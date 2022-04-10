import React from "react";

import Styles from "./SignInUp.module.css";

import { FormControlLabel, RadioGroup, Typography } from "@mui/material";
import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation, useNavigate } from "react-router-dom";

import {
  MobileNumberTextMask,
  CustomisedRadio,
} from "./Helpers/StyledMUIInput";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signUpData } from "../../Utils/Constants/StaticData";
import { useDispatch } from "react-redux";

import notify from "../../Utils/Helpers/notifyToast";
import { validateEmail } from "./Helpers/ValidateEmail";
import { fetchAndSetUserData } from "./Helpers/updateState";
import { signUpUser } from "../../Services/signInUp.service";

function SignUp() {
  const location = useLocation();
  const formRef = React.useRef(123);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = React.useState(false);

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "",
    Mobile: "",
  });

  const [isStorageSelected, setIsStorageSelected] = React.useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const signUp = async (e) => {
    e.preventDefault();
    const inputValidation = handleDataValidation();
    const elements = formRef.current.elements;

    if (inputValidation) {
      setIsDisabled(true);
      const userData = {
        name: elements.Name.value,
        email: elements.SignUpEmail.value,
        phone: parseInt(elements.Mobile.value),
        state: elements.State.value,
        city: elements.City.value,
      };
      if (isStorageSelected) {
        userData.address = elements.Address.value;
        userData.location = elements.URL.value;
        userData.pincode = parseInt(elements.Pincode.value);
        userData.aadhar = parseInt(elements.aadharcard.value);
        userData.pan = elements.PAN.value;
      }
      console.log(userData);

      const signupStatus = await signUpUser({
        email: elements.SignUpEmail.value,
        password: elements.SignUpPassword.value,
        userData: userData,
        isStorage: isStorageSelected,
      });

      if (signupStatus.status) {
        await fetchAndSetUserData(
          signupStatus.accessToken,
          signupStatus.uid,
          dispatch,
          navigate,
          signupStatus.message
        );
      } else {
        notify(signupStatus.message, "error");
      }
      setIsDisabled(false);
    }
  };

  const handleDataValidation = () => {
    if (formRef.current.elements.Name.value === "") {
      notify("Please enter your name", "warning");
      return false;
    }
    if (
      !formRef.current.elements.SignUpEmail.value ||
      !validateEmail(formRef.current.elements.SignUpEmail.value)
    ) {
      notify("Please enter valid Email address", "warning");
      return false;
    }
    if (formRef.current.elements.State.value === "") {
      notify("Please enter your state name", "warning");
      return false;
    }
    if (formRef.current.elements.City.value === "") {
      notify("Please enter your city name", "warning");
      return false;
    }
    if (formRef.current.elements.SignUpPassword.value.length < 6) {
      notify("Password should be atleast 6 characters long", "warning");
      return false;
    }
    if (
      formRef.current.elements.ConfirmPassword.value.length !==
      formRef.current.elements.SignUpPassword.value.length
    ) {
      notify("Confirm password should be same as password", "warning");
      return false;
    }
    if (formRef.current.elements.UserType.value === "Storage") {
      if (formRef.current.elements.Address.value === "") {
        notify("Please enter your address", "warning");
        return false;
      }

      if (formRef.current.elements.URL.value === "") {
        notify("Please enter your Google map URL", "warning");
        return false;
      }
    }
    return true;
  };

  return (
    <div
      className={Styles.Wrapper}
      style={{
        transform:
          location.pathname === "/signup"
            ? "translatex(0)"
            : "translatex(100%)",
      }}
    >
      <div className={Styles.UpperSection}>
        <span className={Styles.Title}>{signUpData.title}</span>
        <form ref={formRef} className={Styles.Form} onSubmit={signUp}>
          <StyledMUIInput
            fullWidth
            id="Name"
            label="Name"
            variant="standard"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="SignUpEmail"
            label="Email address"
            variant="standard"
            type="email"
            margin="dense"
            autoComplete="username"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="State"
            label="State"
            variant="standard"
            margin="dense"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="City"
            label="City/Town"
            variant="standard"
            margin="dense"
            disabled={isDisabled}
          />

          <StyledMUIInput
            fullWidth
            label="Mobile"
            value={values.Mobile}
            onChange={handleChange}
            name="Mobile"
            id="Mobile"
            InputProps={{
              inputComponent: MobileNumberTextMask,
            }}
            variant="standard"
            margin="dense"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="SignUpPassword"
            label="Password"
            variant="standard"
            type="password"
            margin="dense"
            autoComplete="current-password"
            disabled={isDisabled}
          />
          <StyledMUIInput
            fullWidth
            id="ConfirmPassword"
            label="Confirm Password"
            variant="standard"
            type="password"
            margin="dense"
            autoComplete="current-password"
            disabled={isDisabled}
          />
          <RadioGroup
            row
            aria-label="Type"
            defaultValue="User"
            name="UserType"
            className={Styles.RadioWrapper}
            onChange={(e) => {
              setIsStorageSelected(e.target.value === "Storage");
            }}
          >
            <FormControlLabel
              disabled={isDisabled}
              value="User"
              control={<CustomisedRadio />}
              label={
                <Typography
                  sx={{ fontSize: "var(--font-16)", fontWeight: 400 }}
                >
                  User
                </Typography>
              }
            />
            <FormControlLabel
              disabled={isDisabled}
              value="Storage"
              control={<CustomisedRadio />}
              label={
                <Typography
                  sx={{ fontSize: "var(--font-16)", fontWeight: 400 }}
                >
                  Storage
                </Typography>
              }
            />
          </RadioGroup>
          {isStorageSelected ? (
            <>
              <StyledMUIInput
                fullWidth
                id="Pincode"
                label="Pincode"
                variant="standard"
                margin="dense"
                disabled={isDisabled}
              />
              <StyledMUIInput
                fullWidth
                id="Address"
                label="Address"
                variant="standard"
                margin="dense"
                disabled={isDisabled}
              />
              <StyledMUIInput
                fullWidth
                id="URL"
                label="Google map embed URL"
                variant="standard"
                margin="dense"
                type="url"
                autoComplete="url"
                disabled={isDisabled}
              />
              <StyledMUIInput
                fullWidth
                id="aadharcard"
                label="Aadhar Card"
                variant="standard"
                margin="dense"
                type="number"
                disabled={isDisabled}
              />
              <StyledMUIInput
                fullWidth
                id="PAN"
                label="PAN Card"
                variant="standard"
                margin="dense"
                type="text"
                disabled={isDisabled}
              />
            </>
          ) : null}
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
        <BottomText data={signUpData} />
      </div>
    </div>
  );
}

export default SignUp;
