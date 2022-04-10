import React from "react";
import styles from "./LowerContainer.module.css";
import Star from "../../../Assets/General/Star.svg";

let tempData = [];
for (let i = 0; i < 10; i++) {
  tempData.push({
    id: i,
    name: `Stack Cold Storage `,
    address: `1, Gr Flr, Manpada, Sv Rd, Nr Manpada, Chowk, Thane (w),  560053, Mumbai`,
    rating: (i + 1) % 5,
    price: 150,
    priceFor: "Boxes",
    image: `https://picsum.photos/id/${i}/200/200`,
    tags: ["Grapes", "storage", "hot storage"],
  });
}

const LowerContainer = ({ searchResults = tempData }) => {
  return (
    <div className={styles.Wrapper}>
      <h2>{searchResults.length} Results Found</h2>
      <div>
        {searchResults.map((result) => {
          return (
            <div className={styles.ContainerWrapper}>
              <div className={styles.ImageWrapper}>
                <img src={result.image} alt="product" />
              </div>
              <div className={styles.DetailsWrapper}>
                <h3>{result.name}</h3>
                <div className={styles.ChargesReviewWrapper}>
                  <div>
                    <span>₹{result.price}</span>
                    <span> /{result.priceFor}</span>
                  </div>
                  <div>
                    <span>{result.rating}</span>
                    <img src={Star} alt="star" />
                  </div>
                </div>
                <p>{result.address}</p>
                <div className={styles.TagsWrapper}>
                  {result.tags.map((tag) => {
                    return <span>{tag}</span>;
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
