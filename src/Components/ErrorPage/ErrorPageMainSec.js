import React from "react";
import styles from "./ErrorPageMainSec.module.css";
import UpperSection from "./UpperSection/index";
import SecondaryFooter from "./../SecondaryFooter/index";
import SearchComponent from "./../NavBar/SearchComponent/SearchComponent";

const tempData = [
  {
    filterName: "City",
    filterValue: ["Agra", "Surat", "Ahemdabad", "Gwalior"],
  },
  {
    filterName: "Category",
    filterValue: ["Restaurant", "Cafe", "Bar", "Fast Food"],
  },
  {
    filterName: "State",
    filterValue: ["Uttar Pradesh", "Delhi", "Rajasthan", "Maharashtra"],
  },
];

function ErrorPageMainSec() {
  return (
    <div className={styles.Wrapper}>
      <UpperSection />
      <div className={styles.SearchComponentWrapper}>
        <SearchComponent selectOptions={tempData} isLightTheme={false} />
      </div>
      <SecondaryFooter />
    </div>
  );
}

export default ErrorPageMainSec;
