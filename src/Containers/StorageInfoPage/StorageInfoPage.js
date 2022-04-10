import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./StorageInfoPage.module.css";

import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import StorageInfoPageMainComp from "../../Components/StorageInfoPageMainComp";
import notify from "./../../Utils/Helpers/notifyToast";
import NavBar from "../../Components/NavBar";
import { fetchStorageInfoById } from "../../Services/storage.service";
import { useSelector, useDispatch } from "react-redux";
import PopUp from "./../../Components/_General/PopUp/index";
import BookStorage from "./../../Components/BookStorage/index";
import { UPDATE_BOOK_STORAGE_POPUP_STATE } from "../../Redux/ActionTypes";

function StorageInfoPage() {
  const dispatch = useDispatch();
  const popupStates = useSelector((state) => state.popUpReducer);
  const userData = useSelector((state) => state.userReducer.userData);

  const navigate = useNavigate();
  let { id: storageId } = useParams();

  const [storageDetails, setStorageDetails] = useState(null);

  useEffect(() => {
    getStorageDetails();
  }, [storageId]);

  const getStorageDetails = async () => {
    setStorageDetails(null);
    try {
      const tempSTorageData = await fetchStorageInfoById(
        storageId,
        userData.accessToken
      );
      setStorageDetails(tempSTorageData);

      console.log(tempSTorageData);
    } catch (err) {
      notify("Internal Server Error", "error");
      navigate("/");
      console.log(err);
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
      {storageDetails ? (
        <>
          <div className={styles.Wrapper}>
            <NavBar />
            <StorageInfoPageMainComp
              storageDetails={storageDetails}
              refreshDataFun={getStorageDetails}
            />
            <Footer />
          </div>

          <PopUp
            isOpen={popupStates.bookStorage}
            ContentComp={<BookStorage storeData={storageDetails} />}
            closeFun={closeBookingPopup}
            withBorder={false}
          />
        </>
      ) : (
        <div className={styles.Wrapper}>
          <Preloader />
        </div>
      )}
    </>
  );
}

export default StorageInfoPage;
