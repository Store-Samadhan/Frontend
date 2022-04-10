import React, { useState, useEffect } from "react";
import styles from "./SearchComponent.module.css";
import {
  filterSelectStyles,
  valueSelectStyles,
  valueSelectStylesNormal,
  filterSelectStylesNormal,
} from "../helper/ColorStyles";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({ selectOptions, isLightTheme = true }) => {
  const [currentFilterOption, setCurrentFilterOption] = useState(null);
  const [currentFilterArray, setCurrentFilterArray] = useState([]);

  useEffect(() => {
    setCurrentFilterOption(selectOptions[0].filterName);
    setCurrentFilterArray(selectOptions[0].filterValue);
  }, [selectOptions]);

  // useEffect(() => {
  //   console.log(currentFilterOption);
  //   console.log(currentFilterArray);
  // }, [currentFilterOption, currentFilterArray]);

  return (
    <div className={styles.WrapperWrapper}>
      <div className={styles.Wrapper}>
        <Select
          name="bookingSlots"
          options={selectOptions.map((item) => {
            return {
              value: item.filterName,
              label: item.filterName,
            };
          })}
          styles={isLightTheme ? filterSelectStylesNormal : filterSelectStyles}
          isClearable={false}
          placeholder="Filter"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "var(--primary-orange)",
              primary25: "var(--primary-orange)",
              primary50: "var(--primary-orange)",
              primary75: "var(--primary-orange)",
            },
          })}
          onChange={(newValue, action) => {
            setCurrentFilterOption(newValue.value);
          }}
        />

        <Select
          isMulti
          name="bookingSlots"
          options={selectOptions
            .filter((item) => item.filterName === currentFilterOption)[0]
            ?.filterValue.map((item) => {
              return { value: item, label: item };
            })}
          styles={isLightTheme ? valueSelectStylesNormal : valueSelectStyles}
          isClearable={false}
          placeholder="Options"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "var(--primary-orange)",
              primary25: "var(--primary-orange)",
              primary50: "var(--primary-orange)",
              primary75: "var(--primary-orange)",
            },
          })}
          onChange={(newValue, action) => {
            setCurrentFilterArray(newValue.map((item) => item.value));
          }}
        />
      </div>
      <div
        className={styles.IconsWrapper}
        style={{
          backgroundColor: isLightTheme
            ? "var(--primary-orange)"
            : "var(--pure-white)",
        }}
      >
        <SearchIcon
          fontSize="large"
          sx={{
            color: isLightTheme ? "var(--pure-white)" : "var(--primary-orange)",
          }}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
