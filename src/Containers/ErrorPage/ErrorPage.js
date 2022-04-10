import React from "react";
import styles from "./ErrorPage.module.css";
import Navbar from "../../Components/NavBar";
import ErrorPageMainSec from "../../Components/ErrorPage";

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

const ErrorPage = () => {
  return (
    <div>
      <Navbar selectOptions={tempData} />
      <ErrorPageMainSec />
    </div>
  );
};

export default ErrorPage;
