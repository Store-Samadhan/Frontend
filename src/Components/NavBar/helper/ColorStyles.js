export const filterSelectStylesNormal = {
  placeholder: (provided) => ({
    ...provided,
    color: "var(--primary-black)",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    fontSize: "var(--font-16)",
    width: "15rem",
    height: "4.5rem",
    fontWeight: "400",
    border: "1px solid var(--primary-black)",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "1rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderRight: "none",
    ":visited": {
      border: "1px solid var(--primary-black)",
    },
    ":active": {
      border: "1px solid var(--primary-black)",
    },
    ":hover": {
      border: "1px solid var(--primary-black)",
      borderRight: "none",
    },
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      fontSize: "var(--font-16)",
      textAlign: "center",
      transition: "background-color 0.1s ease",
      ":hover": {
        color: "var(--primary-black)",
      },

      "@media only screen and (max-width: 440px)": {
        ...styles["@media only screen and (max-width: 440px)"],
        fontSize: "var(--font-16)",
      },
    };
  },

  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--primary-black)",
    transition: "all 0.1s",
    ":hover": {
      color: "var(--primary-black)",
    },
    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  singleValue: (styles, { data }) => {
    return {
      ...styles,
      color: "var(--primary-black)",
    };
  },
};
export const valueSelectStylesNormal = {
  placeholder: (provided) => ({
    ...provided,
    color: "var(--primary-black)",
  }),
  control: (styles) => ({
    ...styles,
    minHeight: "4.5rem",
    backgroundColor: "transparent",
    fontSize: "var(--font-16)",
    width: "40rem",
    fontWeight: "400",
    border: "1px solid var(--primary-black)",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    borderRadius: "1rem",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    ":visited": {
      border: "1px solid var(--primary-black)",
    },
    ":active": {
      border: "1px solid var(--primary-black)",
    },
    ":hover": {
      border: "1px solid var(--primary-black)",
    },
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      fontSize: "var(--font-16)",
      transition: "background-color 0.1s ease",
      ":hover": {
        color: "var(--primary-black)",
      },
      "@media only screen and (max-width: 440px)": {
        ...styles["@media only screen and (max-width: 440px)"],
        fontSize: "var(--font-16)",
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      border: "1px solid var(--primary-black)",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: "var(--font-16)",
    color: "var(--primary-black)",
    backgroundColor: "var(--pure-white)",
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    transition: "all 0.2s",
    backgroundColor: "var(--pure-white)",
    color: "var(--primary-black)",

    ":hover": {
      cursor: "pointer",
      fontSize: "var(--font-16)",
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--primary-black)",
    transition: "all 0.1s",
    ":hover": {
      color: "var(--primary-black)",
    },
    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },
  }),

  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
};
export const filterSelectStyles = {
  placeholder: (provided) => ({
    ...provided,
    color: "var(--pure-white)",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    fontSize: "var(--font-16)",
    width: "15rem",
    height: "4.5rem",
    fontWeight: "400",
    border: "1px solid var(--pure-white)",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    textAlign: "center",
    borderRadius: "1rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderRight: "none",
    ":visited": {
      border: "1px solid var(--pure-white)",
    },
    ":active": {
      border: "1px solid var(--pure-white)",
    },
    ":hover": {
      border: "1px solid var(--pure-white)",
      borderRight: "none",
    },
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      fontSize: "var(--font-16)",
      textAlign: "center",
      transition: "background-color 0.1s ease",
      ":hover": {
        color: "var(--pure-white)",
      },

      "@media only screen and (max-width: 440px)": {
        ...styles["@media only screen and (max-width: 440px)"],
        fontSize: "var(--font-16)",
      },
    };
  },

  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--pure-white)",
    transition: "all 0.1s",
    ":hover": {
      color: "var(--primary-black)",
    },
    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  singleValue: (styles, { data }) => {
    return {
      ...styles,
      color: "var(--pure-white)",
    };
  },
};
export const valueSelectStyles = {
  placeholder: (provided) => ({
    ...provided,
    color: "var(--pure-white)",
  }),
  control: (styles) => ({
    ...styles,
    minHeight: "4.5rem",
    backgroundColor: "transparent",
    fontSize: "var(--font-16)",
    width: "40rem",
    fontWeight: "400",
    border: "1px solid var(--pure-white)",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    borderRadius: "1rem",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    ":visited": {
      border: "1px solid var(--pure-white)",
    },
    ":active": {
      border: "1px solid var(--pure-white)",
    },
    ":hover": {
      border: "1px solid var(--pure-white)",
    },
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      fontSize: "var(--font-16)",
      transition: "background-color 0.1s ease",
      ":hover": {
        color: "var(--pure-white)",
      },
      "@media only screen and (max-width: 440px)": {
        ...styles["@media only screen and (max-width: 440px)"],
        fontSize: "var(--font-16)",
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      border: "1px solid var(--pure-white)",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: "var(--font-16)",
    color: "var(--pure-white)",
    backgroundColor: "var(--primary-orange)",
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    transition: "all 0.2s",
    backgroundColor: "var(--primary-orange)",
    color: "var(--pure-white)",

    ":hover": {
      cursor: "pointer",
      fontSize: "var(--font-16)",
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--pure-white)",
    transition: "all 0.1s",
    ":hover": {
      color: "var(--pure-white)",
    },
    svg: {
      width: "1.5rem",
      height: "1.5rem",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
};
