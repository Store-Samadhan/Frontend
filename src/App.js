import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

import LandingPage from "./Containers/LandingPage";

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <>
      {userData != null && (
        <Routes>
          {["/", "login", "signup"].map((path, index) => (
            <Route exact key={index} path={path} element={<LandingPage />} />
          ))}
        </Routes>
      )}
    </>
  );
};

export default App;
