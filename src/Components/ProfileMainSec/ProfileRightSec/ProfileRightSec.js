import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./ProfileRightSec.module.css";

import PersonalInfoSec from "./PersonalInfoSec";
import Bookings from "./Bookings";

function ProfileRightSec({ refreshUserData }) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PersonalInfoSec />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<Navigate to="/profile/" />} />
      </Routes>
    </>
  );
}

export default ProfileRightSec;
