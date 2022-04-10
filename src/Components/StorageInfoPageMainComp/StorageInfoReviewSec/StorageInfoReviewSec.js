import React from "react";
import { useSelector } from "react-redux";

import { STORAGE_INFO_PAGE_DATA } from "../../../Utils/Constants/StaticData";

import styles from "./StorageInfoReviewSec.module.css";
import Ratings from "../../Ratings/Ratings";
import Button from "../../Button/Button";
import Rating from "@mui/material/Rating";
import notify from "../../../Utils/Helpers/notifyToast";
import { addReview } from "../../../Services/user.service";

function StorageInfoReviewSec({ storageDetails, refreshDataFun }) {
  const userData = useSelector((state) => state.userReducer.userData);
  const [ratingsValue, setRatingsValue] = React.useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add review
      if (!e.target.elements.ReviewText.value) {
        throw new Error("Please enter review text");
      }

      await addReview(
        {
          rating: ratingsValue,
          storageId: storageDetails.id,
          review: e.target.elements.ReviewText.value,
          userName: userData.name,
        },
        userData.accessToken
      );
      if (refreshDataFun) {
        refreshDataFun();
      }
      e.target.elements.ReviewText.value = "";
      notify("Review Added Successfully", "success");
    } catch (err) {
      console.log(err);
      if (err.message) {
        notify(err.message, "error");
      } else {
        notify("Error adding review", "error");
      }
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.UpperSec}>
        <h4 className={styles.Title}>
          {STORAGE_INFO_PAGE_DATA.ratingsAndReviews}
        </h4>
        <div className={styles.ReviewHighlights}>
          <Ratings
            rating={
              storageDetails.ratings ? storageDetails.ratings.avgRating : 0
            }
          />
          <span className={styles.NoOfRatings}>
            {storageDetails.ratings ? storageDetails.ratings.totalRatings : 0}{" "}
            {STORAGE_INFO_PAGE_DATA.reviews}
          </span>
        </div>
      </div>
      <form className={styles.AddReviewSec} onSubmit={handleSubmit}>
        <div className={styles.ReviewStars}>
          <Rating
            name="RatingStars"
            value={ratingsValue}
            size="large"
            onChange={(e) => {
              setRatingsValue(e.target.value);
            }}
          />
        </div>
        <textarea
          id="ReviewText"
          className={styles.ReviewTextArea}
          placeholder="Write a review"
        />
        <Button
          name={STORAGE_INFO_PAGE_DATA.addReview}
          wrapperClass={styles.AddReviewBtn}
          primaryColor={`var(--primary-orange)`}
          inverted
        />
      </form>
      <div className={styles.ReviewsList}>
        {storageDetails.ratings?.reviews.map((review, index) => {
          return (
            <div
              key={index}
              className={styles.Review}
              style={
                index === storageDetails.ratings.reviews.length - 1
                  ? {
                      borderBottom: "none",
                    }
                  : {}
              }
            >
              <div className={styles.ReviewLeftSec}>
                <Ratings rating={review.rating} />
              </div>
              <div className={styles.ReviewRightSec}>
                <div className={styles.ReviewText}>{review.review}</div>
                <div className={styles.AuthorAndDate}>
                  {`${review.userName} • ${new Date(
                    review.createdAt._seconds * 1000
                  ).toLocaleString()}`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StorageInfoReviewSec;
