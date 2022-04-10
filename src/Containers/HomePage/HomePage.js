import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../Components/NavBar";
import SearchComponent from "./../../Components/NavBar/SearchComponent/SearchComponent";
import LowerContainer from "../../Components/HomePage/LowerContainer";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import { fetchFilteredStorage } from "../../Services/storage.service";
const indianCitiesDatabase = require("indian-cities-database");
var cities = indianCitiesDatabase.cities;

const HomePage = () => {
  const [LowerContainerData, setLowerContainerData] = useState([]);
  let tempData = [
    {
      filterName: "City",
      filterkey: "city",
      filterValue: cities.map((item) => item.city),
    },
    {
      filterName: "Name",
      filterkey: "name",
      filterValue: ["Storage Facilites"],
    },
    {
      filterName: "Pincode",
      filterkey: "pincode",
      filterValue: ["282002"],
    },
    {
      filterName: "Tags",
      filterkey: "tags",
      filterValue: ["Boxes"],
    },
  ];
  const userData = useSelector((state) => state.userReducer.userData);
  useEffect(async () => {
    // tempData[0].filterValue = cities.map((item) => item.city);
    const data = await fetchFilteredStorage(null, null, userData.accessToken);
    setLowerContainerData(data);
  }, []);
  const handleClickFilter = async (filterArray, filterOption) => {
    if (filterArray.length !== 0) {
      const data = await fetchFilteredStorage(
        filterOption.value.toLowerCase(),
        filterArray.map((item) => item.value),
        userData.accessToken
      );
      setLowerContainerData(data);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <NavBar />
      <div className={styles.SearchComponentWrapper}>
        <SearchComponent
          selectOptions={tempData}
          isLightTheme={false}
          handleClickFilter={handleClickFilter}
        />
      </div>
      <LowerContainer searchResults={LowerContainerData} />
      <Footer />
    </div>
  );
};

export default HomePage;
