import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import styles from "./StorageInfoInfoSec.module.css";
import Ratings from "../../Ratings";
import { STORAGE_INFO_PAGE_DATA } from "../../../Utils/Constants/StaticData";
import Button from "../../Button/index";

import { ReactComponent as PlusIcon } from "../../../Assets/Storage/Plus.svg";
import notify from "../../../Utils/Helpers/notifyToast";
import Table from "../../Table/Table";

function StorageInfoInfoSec({ storageDetails }) {
  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TitleInfoSec}>
        <h4 className={styles.FacilityName}>{storageDetails.name}</h4>
        <div div className={styles.ReviewsSec}>
          <Ratings rating={storageDetails.ratings.avgRating} />
          <span className={styles.NoOfRatings}>
            {storageDetails.ratings.totalRatings}{" "}
            {STORAGE_INFO_PAGE_DATA.reviews}
          </span>
        </div>
      </div>
      <div className={styles.TagsList}>
        {storageDetails.tags.map((tag, index) => (
          <span key={index} className={styles.Tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.AveragePrice}>
        <span className={styles.AvgPrice}>{"₹" + storageDetails.avgPrice}</span>
        <span className={styles.AvgPriceTxt}>
          {STORAGE_INFO_PAGE_DATA.avgTxt}
        </span>
      </div>
      <sapn className={styles.Address}>{storageDetails.address}</sapn>
      <hr className={styles.Hr} />
      <div className={styles.PricingSec}>
        <h4 className={styles.PricingTitle}>
          {STORAGE_INFO_PAGE_DATA.pricing}
        </h4>
        <div className={styles.PricingTable}>
          <Table
            data={storageDetails.pricing.data}
            columns={storageDetails.pricing.columns}
          />
        </div>
      </div>
    </div>
  );
}

export default StorageInfoInfoSec;
