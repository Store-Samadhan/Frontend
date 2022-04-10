import React, { useState } from "react";

import styles from "./StorageInfoPageMainComp.module.css";

import StorageInfoImageSec from "./StorageInfoImageSec";
import StorageInfoInfoSec from "./StorageInfoInfoSec";
import StorageInfoReviewSec from "./StorageInfoReviewSec";

function StorageInfoPageMainComp({ storageDetails, refreshDataFun }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.UpperSection}>
        <div className={styles.LeftSecWrapper}>
          <StorageInfoImageSec
            images={storageDetails.images}
            googlEmbedURL={storageDetails.location}
          />
        </div>
        <div className={styles.RightSecWrapper}>
          <StorageInfoInfoSec storageDetails={storageDetails} />
        </div>
      </div>
      <div className={styles.LowerSection}>
        <StorageInfoReviewSec
          storageDetails={storageDetails}
          refreshDataFun={refreshDataFun}
        />
      </div>
    </div>
  );
}

export default StorageInfoPageMainComp;
