import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../Components/NavBar";
import SearchComponent from "./../../Components/NavBar/SearchComponent/SearchComponent";
import LowerContainer from "../../Components/HomePage/LowerContainer";
import Footer from "../../Components/Footer";

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

const HomePage = () => {
  return (
    <div className={styles.Wrapper}>
      <NavBar />
      <div className={styles.SearchComponentWrapper}>
        <SearchComponent selectOptions={tempData} isLightTheme={false} />
      </div>
      <LowerContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
