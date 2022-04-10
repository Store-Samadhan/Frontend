import React, { useState, useEffect } from "react";
import styles from "./SearchComponent.module.css";
import {
  filterSelectStyles,
  valueSelectStyles,
  valueSelectStylesNormal,
  filterSelectStylesNormal,
} from "../helper/ColorStyles";
import Select from "react-select/creatable";
import CreatableSelect from "react-select/creatable";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({
  selectOptions,
  isLightTheme = true,
  handleClickFilter,
}) => {
  const [currentFilterOption, setCurrentFilterOption] = useState(
    selectOptions[0].filterName
  );
  const [currentFilterArray, setCurrentFilterArray] = useState([]);

  const handleClick = () => {
    handleClickFilter(currentFilterArray, currentFilterOption);
  };

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
            setCurrentFilterOption({
              value: newValue.value,
              label: newValue.label,
            });
            setCurrentFilterArray([]);
          }}
          value={currentFilterOption}
        />

        <CreatableSelect
          isMulti
          name="bookingSlots"
          options={selectOptions
            .filter((item) => item.filterName === currentFilterOption?.label)[0]
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
            setCurrentFilterArray(
              newValue.map((item) => {
                return { value: item.value, label: item.label };
              }) || []
            );
          }}
          value={currentFilterArray}
        />
      </div>
      <div
        className={styles.IconsWrapper}
        style={{
          backgroundColor: isLightTheme
            ? "var(--primary-orange)"
            : "var(--pure-white)",
        }}
        onClick={handleClick}
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
