import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import styles from "./Profile.module.css";

import ProfileMainSec from "./../../Components/ProfileMainSec";
import SecondaryFooter from "./../../Components/SecondaryFooter";
import NavBar from "../../Components/NavBar";

const Profile = ({ refreshUserData }) => {
  return (
    <div className={styles.Wrapper}>
      <NavBar />
      <ProfileMainSec refreshUserData={refreshUserData} />
      <SecondaryFooter />
    </div>
  );
};

export default Profile;
