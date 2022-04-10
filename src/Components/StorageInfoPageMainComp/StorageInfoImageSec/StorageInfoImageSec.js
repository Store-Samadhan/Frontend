import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./StorageInfoImageSec.module.css";
import Button from "../../Button/index";
import { STORAGE_INFO_PAGE_DATA } from "../../../Utils/Constants/StaticData";
import notify from "../../../Utils/Helpers/notifyToast";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../../../Assets/Storage/Location.svg";
import { UPDATE_BOOK_STORAGE_POPUP_STATE } from "../../../Redux/ActionTypes";

function StorageInfoImageSec({ images, googlEmbedURL }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(-1);

  const bookStorage = async () => {
    try {
      dispatch({
        type: UPDATE_BOOK_STORAGE_POPUP_STATE,
        value: true,
      });
    } catch (err) {
      console.log(err);
      notify("Failed to book storage", "error");
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSecWrapper}>
        <div
          className={
            styles.ImageWrapper +
            " " +
            (-1 === currentImage ? styles.Active : "")
          }
          onMouseEnter={() => setCurrentImage(-1)}
        >
          <img
            src={LocationIcon}
            alt="google maps icon"
            className={styles.Image}
          />
        </div>
        {images?.map((image, index) => (
          <div
            key={index}
            className={
              styles.ImageWrapper +
              " " +
              (index === currentImage ? styles.Active : "")
            }
            onMouseEnter={() => setCurrentImage(index)}
          >
            <img src={image} alt="storage" className={styles.Image} />
          </div>
        ))}
      </div>
      <div className={styles.RightSecWrapper}>
        <div className={styles.PrimaryImageWrapper}>
          {currentImage === -1 ? (
            <>
              <iframe
                src={googlEmbedURL}
                width="400"
                height="400"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                }}
                loading="lazy"
                onLoad={() => {
                  console.log("iframe loaded");
                }}
              ></iframe>
            </>
          ) : (
            <img
              src={images[currentImage]}
              alt="storage"
              className={styles.PrimaryImage}
              onLoad={(e) => {
                e.target.style.opacity = 1;
              }}
            />
          )}
        </div>
        <div className={styles.ButtonsWrapper}>
          <Button
            name={STORAGE_INFO_PAGE_DATA.bookNow}
            onClick={bookStorage}
            primaryColor="var(--sec-black)"
            wrapperClass={styles.PlaceOrderButton + " " + styles.Button}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}

export default StorageInfoImageSec;
