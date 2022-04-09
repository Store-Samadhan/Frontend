import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { registerPlugin } from "react-filepond";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import LandingPage from "./Containers/LandingPage";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const App = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />
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
