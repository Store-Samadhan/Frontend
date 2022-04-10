import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { registerPlugin } from "react-filepond";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "./Services/user.service";
import { app } from "./firebase";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";
import "filepond/dist/filepond.min.css";

import LandingPage from "./Containers/LandingPage";
import ErrorPage from "./Containers/ErrorPage";
import StorageInfoPage from "./Containers/StorageInfoPage";
import Profile from "./Containers/Profile/Profile";

import { UPDATE_USER_DATA } from "./Redux/ActionTypes";
import notify from "./Utils/Helpers/notifyToast";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import PopUp from "./Components/_General/PopUp/PopUp";

import Preloader from "./Components/Preloader/index";
import { UPDATE_BOOK_STORAGE_POPUP_STATE } from "./Redux/ActionTypes";
import BookStorage from "./Components/BookStorage/index";
import HomePage from "./Containers/HomePage";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const App = () => {
  const popupStates = useSelector((state) => state.popUpReducer);
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const [hasInitialised, setHasInitialised] = React.useState(false);

  const auth = getAuth();

  useEffect(() => {
    if (userData) {
      if (!hasInitialised) {
        setHasInitialised(true);
      }
    }
  }, [userData]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.accessToken, user.uid);
      } else {
        setHasInitialised(true);
      }
    });
  }, []);

  const fetchUserData = async (accessToken, uid) => {
    try {
      const localeUserData = await getUser(accessToken);

      dispatch({
        type: UPDATE_USER_DATA,
        data: { ...localeUserData, accessToken, uid },
      });
    } catch (err) {
      notify("Internal Server Error", "error");
      dispatch({
        type: UPDATE_USER_DATA,
        data: null,
      });
    }
  };

  const closeBookingPopup = () => {
    dispatch({
      type: UPDATE_BOOK_STORAGE_POPUP_STATE,
      value: false,
    });
  };

  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />
      <>
        {hasInitialised ? (
          <>
            <Routes>
              {userData != null ? (
                <>
                  <Route exact path="s/:id" element={<StorageInfoPage />} />
                  <Route exact path="profile/*" element={<Profile />} />
                  <Route exact path="/" element={<HomePage />} />
                </>
              ) : (
                <>
                  {["/", "login", "signup"].map((path, index) => (
                    <Route
                      exact
                      key={index}
                      path={path}
                      element={<LandingPage />}
                    />
                  ))}
                </>
              )}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            {/* {userData && (
              <>
                <PopUp
                  isOpen={popupStates.bookStorage}
                  ContentComp={
                    <BookStorage refreshDataFunction={fetchUserData} />
                  }
                  closeFun={closeBookingPopup}
                  withBorder={false}
                />
              </>
            )} */}
          </>
        ) : (
          <Preloader />
        )}
      </>
    </>
  );
};

export default App;
