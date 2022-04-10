import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { registerPlugin } from "react-filepond";

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

import { UPDATE_BOOK_STORAGE_POPUP_STATE } from "./Redux/ActionTypes";
import BookStorage from "./Components/BookStorage/index";
import HomePage from "./Containers/HomePage";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const App = () => {
  const popupStates = useSelector((state) => state.popUpReducer);
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["token"]);

  const fetchUserData = async () => {
    // setCookie(
    //   "token",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDEyZjUwYmQ3ODY4NzBiODdmMmY4ZiIsImlhdCI6MTY0MTA5OTA4OH0.kY_HiMKWRfbAZoeH2MSwb8F7zdWzKrmDU79AZ_3BoJI",
    //   { sameSite: "strict" }
    // );

    // if (cookie.token) {
    try {
      const localeUserData = {
        name: "John Doe",
        email: "johndoe@hehe.com",
        mobile: "123456789",
        mapsEmbedURL:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3760221132056!2d78.17195011464668!3d26.249456894646617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1649353094685!5m2!1sen!2sin",
        images: [
          "http://res.cloudinary.com/connect-x/image/upload/v1649431074/bxjkqbtusotiwjfwc653.png",
          "http://res.cloudinary.com/connect-x/image/upload/v1649431074/bxjkqbtusotiwjfwc653.png",
        ],
        addresses: [
          {
            address:
              "7-1-112, Beside Gurudwar Near Satyam Thtr, Ameerpet, Hyderabad, Andhra Pradesh, India",
            pincode: 121546,
          },
          {
            address:
              "7-1-112, Beside Gurudwar Near Satyam Thtr, Ameerpet, Hyderabad, Andhra Pradesh, India - 121547",
            pincode: 121546,
          },
        ],
        pricing: {
          columns: [
            {
              Header: "Boxes",
              accessor: "boxes",
            },
            {
              Header: "Cold",
              accessor: "cold",
            },
            {
              Header: "Normal",
              accessor: "normal",
            },
          ],
          data: [
            {
              boxes: "1-10",
              cold: 150,
              normal: 140,
            },
            {
              boxes: "11-20",
              cold: 145,
              normal: 130,
            },
            {
              boxes: "21-50",
              cold: 140,
              normal: 120,
            },
            {
              boxes: "51-100",
              cold: 135,
              normal: 110,
            },
            {
              boxes: "101-500",
              cold: 130,
              normal: 100,
            },
          ],
        },
        avgPrice: 150,
        tags: ["cold storage", "storage", "hot storage"],
        ratings: {
          avgRating: 4.5,
          totalRatings: 100,
          reviews: new Array(5).fill({
            name: "John Doe",
            rating: 4,
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in faucibus congue tellus. Sed ut lectus non accumsan et vestibulum, venenatis nunc. Aliquam pretium lorem gravida diam. Fringilla ut est ultrices vestibulum. Vitae posuere hendrerit pulvinar rutrum cras ut. Vel sagittis morbi quam proin convallis rutrum nunc sit amet. Molestie in justo, quis lorem aenean pharetra. Etiam tellus in eu convallis",
            timestamp: Date.now(),
          }),
        },
        isSeller: true,
        accessToken: "blahblahblah",
      };

      dispatch({
        type: UPDATE_USER_DATA,
        data: localeUserData,
      });
    } catch (err) {
      notify("Internal Server Error", "error");
      dispatch({
        type: UPDATE_USER_DATA,
        data: null,
      });
      // setInitialized(true);
    }
    // } else {
    //   dispatch({
    //     type: UPDATE_USER_DATA,
    //     data: null,
    //   });
    //   // setInitialized(true);
    // }
  };

  const closeBookingPopup = () => {
    dispatch({
      type: UPDATE_BOOK_STORAGE_POPUP_STATE,
      value: false,
    });
  };

  useEffect(async () => {
    fetchUserData();
  }, [cookie]);

  return (
    <>
      <ToastContainer bodyClassName={styles.ToastBody} />

      {userData != null && (
        <Routes>
          {["/", "login", "signup"].map((path, index) => (
            <Route exact key={index} path={path} element={<LandingPage />} />
          ))}
          <Route exact path="storage/:id" element={<StorageInfoPage />} />
          <Route exact path="profile/*" element={<Profile />} />
          <Route exact path="home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
      {userData && (
        <>
          <PopUp
            isOpen={popupStates.bookStorage}
            ContentComp={<BookStorage refreshDataFunction={fetchUserData} />}
            closeFun={closeBookingPopup}
            withBorder={false}
          />
        </>
      )}
    </>
  );
};

export default App;
