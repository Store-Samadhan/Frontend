import React from "react";

import styles from "./ProfileMainSec.module.css";

import ProfileLeftSec from "./ProfileLeftSec/ProfileLeftSec";
import ProfileRightSec from "./ProfileRightSec/index";

function ProfileMainSec({ refreshUserData }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <ProfileLeftSec />
      </div>
      <div className={styles.RightSec}>
        <ProfileRightSec refreshUserData={refreshUserData} />
      </div>
    </div>
  );
}

export default ProfileMainSec;
