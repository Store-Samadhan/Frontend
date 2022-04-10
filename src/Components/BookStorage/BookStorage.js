import React from "react";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

import styles from "./BookStorage.module.css";
import { BOOK_STORAGE_FACILITY_DATA } from "../../Utils/Constants/StaticData";
import Button from "../Button";
import notify from "../../Utils/Helpers/notifyToast";

function BookStorage({
  refreshDataFunction,
  storeData = {
    name: "Stark Cold Food Storing facility",
    pricing: {
      columns: [
        {
          Header: "Boxes",
          accessor: "boxes",
        },
        {
          Header: "Cold",
          accessor: "cold",
        },
        {
          Header: "Normal",
          accessor: "normal",
        },
      ],
      data: [
        {
          boxes: "1-10",
          cold: 150,
          normal: 140,
        },
        {
          boxes: "11-20",
          cold: 145,
          normal: 130,
        },
        {
          boxes: "21-50",
          cold: 140,
          normal: 120,
        },
        {
          boxes: "51-100",
          cold: 135,
          normal: 110,
        },
        {
          boxes: "101-500",
          cold: 130,
          normal: 100,
        },
      ],
    },
  },
}) {
  const userData = useSelector((state) => state.userReducer.userData);

  const [formData, setFormData] = React.useState({
    pickUpAddress: "",
    storageType: "",
    boxes: 1,
    duration: 1,
  });

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{BOOK_STORAGE_FACILITY_DATA.title}</h2>
      <form className={styles.LowerWrapper}>
        <div className={styles.FormWrapper}>
          <div className={styles.KeyValueWrapper}>
            <span className={styles.Key}>
              {BOOK_STORAGE_FACILITY_DATA.name}
            </span>
            <span className={styles.Value}>{storeData.name}</span>
          </div>
          <div className={styles.KeyValueWrapper}>
            <label className={styles.Key}>
              {BOOK_STORAGE_FACILITY_DATA.pickupAddress}
            </label>
            <Select
              sx={{ minWidth: 120 }}
              value={formData.pickUpAddress}
              onChange={(e) => {
                setFormData({ ...formData, pickUpAddress: e.target.value });
              }}
              style={
                {
                  // width: "23rem",
                  // fontSize: "1.6rem",
                  // paddingLeft: "2rem",
                  // paddingRight: "2rem",
                  // borderRadius: "1rem",
                  // borderColor: "#cccccc",
                }
              }
              className={styles.Select}
            >
              {userData.addresses.map((address, index) => (
                <MenuItem
                  value={address.address + " " + address.pincode}
                  key={index}
                  style={{
                    fontSize: "1.6rem",
                  }}
                  className={styles.MenuItem}
                >
                  {address.address}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={styles.KeyValueWrapper}>
            <label className={styles.Key}>
              {BOOK_STORAGE_FACILITY_DATA.storageType}
            </label>
            <Select
              value={formData.storageType}
              //   label={BOOK_STORAGE_FACILITY_DATA.storageType}
              onChange={(e) => {
                setFormData({ ...formData, storageType: e.target.value });
              }}
              className={styles.Select}
            >
              {storeData.pricing.columns.map((storageType, index) => (
                <MenuItem
                  value={storageType.accessor}
                  key={index}
                  style={{
                    fontSize: "1.6rem",
                  }}
                  className={styles.MenuItem}
                >
                  {storageType.Header}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={styles.KeyValueWrapper}>
            <label className={styles.Key}>
              {BOOK_STORAGE_FACILITY_DATA.boxes}
            </label>
            <input
              className={styles.Value}
              type="number"
              value={formData.boxes}
              onChange={(e) => {
                if (e.target.value > 0) {
                  setFormData({ ...formData, boxes: e.target.value });
                } else {
                  notify("Please enter a valid number");
                }
              }}
              min="1"
            />
          </div>
          <div className={styles.KeyValueWrapper}>
            <label className={styles.Key}>
              {BOOK_STORAGE_FACILITY_DATA.duration}
            </label>
            <input
              className={styles.Value}
              type="number"
              value={formData.duration}
              onChange={(e) => {
                if (e.target.value > 12 || e.target.value < 1) {
                  notify("Duration should be between 1 and 12 weeks");
                } else {
                  setFormData({ ...formData, duration: e.target.value });
                }
              }}
              min="1"
              max="12"
            />
          </div>
        </div>
        <div className={styles.ReceiptWrapper}>
          <h4 className={styles.ReceiptTitle}>
            {BOOK_STORAGE_FACILITY_DATA.receipt}
          </h4>
          <div className={styles.Receipt}>
            <div className={styles.ReceiptKeyValueWrapper}>
              <span className={styles.ReceiptKey}>
                {BOOK_STORAGE_FACILITY_DATA.chargePerBox}
              </span>
              <span className={styles.ReceiptValue}>
                {storeData.chargePerBox}
              </span>
            </div>
            <div className={styles.ReceiptKeyValueWrapper}>
              <span className={styles.ReceiptKey}>
                {BOOK_STORAGE_FACILITY_DATA.weeks}
              </span>
              <span className={styles.ReceiptValue}>{formData.duration}</span>
            </div>
            <div className={styles.ReceiptKeyValueWrapper}>
              <span className={styles.ReceiptKey}>
                {BOOK_STORAGE_FACILITY_DATA.boxes}
              </span>
              <span className={styles.ReceiptValue}>{formData.boxes}</span>
            </div>
            <hr className={styles.ReceiptHr} />
            <div className={styles.ReceiptKeyValueWrapper}>
              <span className={styles.ReceiptKey}>
                {BOOK_STORAGE_FACILITY_DATA.total}
              </span>
              <span className={styles.ReceiptValue}>
                {storeData.chargePerBox * formData.duration * formData.boxes}
              </span>
            </div>
          </div>
        </div>
        <Button
          name={
            BOOK_STORAGE_FACILITY_DATA.bookFor +
            " " +
            10 * formData.duration * formData.boxes
          }
          primaryColor={`var(--primary-orange)`}
          fullWidth
        />
      </form>
    </div>
  );
}

export default BookStorage;
