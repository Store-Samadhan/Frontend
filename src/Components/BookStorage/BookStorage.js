import React from "react";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

import styles from "./BookStorage.module.css";
import { BOOK_STORAGE_FACILITY_DATA } from "../../Utils/Constants/StaticData";
import Button from "../Button";
import notify from "../../Utils/Helpers/notifyToast";
import {
  paymentInitialization,
  payementService,
} from "./../../Services/payment.service";
import { UPDATE_BOOK_STORAGE_POPUP_STATE } from "../../Redux/ActionTypes";
import { parse } from "filepond";

function BookStorage({ storeData }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);

  const [formData, setFormData] = React.useState({
    storageType: storeData.pricing.data
      ? storeData.pricing.data[0]
      : {
          type: "",
          price: 0,
        },
    boxes: 1,
    duration: 1,
  });

  const booksStorageFun = async (e) => {
    e.preventDefault();
    if (formData.boxes < 1) {
      notify("Please select atleast one box", "error");
      return;
    }
    if (formData.duration < 1 || formData.duration > 12) {
      notify("Please select duration between 1 to 12 weeks", "error");
      return;
    }
    try {
      const data = await paymentInitialization(
        userData.accessToken,
        storeData.id,
        parseInt(formData.boxes),
        formData.storageType.price * formData.duration * formData.boxes,
        parseInt(storeData.phone),
        formData.storageType.type,
        parseInt(formData.duration),
        userData.name
      );
      const payementData = await payementService(
        300,
        data.orderId,
        data.bookingId,
        userData.accessToken,
        userData
      );
      dispatch({
        type: UPDATE_BOOK_STORAGE_POPUP_STATE,
        value: false,
      });
    } catch (err) {
      notify("Failed to book storage", "error");
    }
  };

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
              {storeData.pricing.data?.map((storageType, index) => (
                <MenuItem
                  value={storageType}
                  key={index}
                  style={{
                    fontSize: "1.6rem",
                  }}
                  className={styles.type}
                >
                  {storageType.type}
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
                setFormData({ ...formData, boxes: e.target.value });
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
                setFormData({ ...formData, duration: e.target.value });
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
                {formData.storageType.price}
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
                {formData.storageType.price *
                  formData.duration *
                  formData.boxes}
              </span>
            </div>
          </div>
        </div>
        <Button
          name={
            BOOK_STORAGE_FACILITY_DATA.bookFor +
            " " +
            formData.storageType.price * formData.duration * formData.boxes
          }
          primaryColor={`var(--primary-orange)`}
          fullWidth
          onClick={booksStorageFun}
        />
      </form>
    </div>
  );
}

export default BookStorage;
