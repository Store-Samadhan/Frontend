import React, { useEffect } from "react";
import styles from "./LowerContainer.module.css";
import Star from "../../../Assets/General/Star.svg";
import TempStore from "../../../Assets/General/TempStoreImage.jpg";

let tempData = [];
for (let i = 0; i < 10; i++) {
  tempData.push({
    id: i,
    name: `Stack Cold Storage `,
    address: `1, Gr Flr, Manpada, Sv Rd, Nr Manpada, Chowk, Thane (w),  560053, Mumbai`,
    rating: (i + 1) % 5,
    price: 150,
    priceFor: "Boxes",
    image: TempStore,
    tags: ["Grapes", "storage", "hot storage"],
  });
}

const LowerContainer = ({ searchResults = tempData }) => {
  return (
    <div className={styles.Wrapper}>
      <h2>{searchResults.length} Results Found</h2>
      <div>
        {searchResults &&
          searchResults.map((result, index) => {
            return (
              <div className={styles.ContainerWrapper} key={index}>
                <div className={styles.ImageWrapper}>
                  {result.image ? (
                    <img src={result.image} alt="image" />
                  ) : (
                    <img src={tempData[0].image} alt="star" />
                  )}
                </div>
                <div className={styles.DetailsWrapper}>
                  <h3>{result.name}</h3>
                  <div className={styles.ChargesReviewWrapper}>
                    <div>
                      {result.price ? (
                        <>
                          <span>₹{result.price}</span>
                          <span> /{result.priceFor}</span>
                        </>
                      ) : (
                        <>
                          <span>-</span>
                        </>
                      )}
                    </div>
                    <div>
                      {result.rating ? (
                        <span>{result.rating}</span>
                      ) : (
                        <span>-</span>
                      )}
                      <img src={Star} alt="star" />
                    </div>
                  </div>
                  <p>{result.address}</p>
                  <div className={styles.TagsWrapper}>
                    {result.tags &&
                      result.tags.map((tag, index) => {
                        return <span key={index}>{tag}</span>;
                      })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LowerContainer;
