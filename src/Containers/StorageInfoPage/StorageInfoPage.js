import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./StorageInfoPage.module.css";

import Preloader from "../../Components/Preloader";
import Footer from "../../Components/Footer";
import StorageInfoPageMainComp from "../../Components/StorageInfoPageMainComp";
import notify from "./../../Utils/Helpers/notifyToast";
import NavBar from "../../Components/NavBar";
import { fetchStorageInfoById } from "../../Services/storage.service";
import { useSelector } from "react-redux";

const tempSTorageData = {
  images: [
    "https://images.unsplash.com/photo-1609143739217-01b60dad1c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ],
  name: "Random cold storage facility",
  mapsEmbedURL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3760221132056!2d78.17195011464668!3d26.249456894646617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1649353094685!5m2!1sen!2sin",
  // Random address
  address:
    "7-1-112, Beside Gurudwar Near Satyam Thtr, Ameerpet, Hyderabad, Andhra Pradesh, India - 121546",
  // pricing: [
  //   ["Boxes", "cold", "normal"],
  //   ["1-10", 150, 140],
  //   ["11-20", 145, 130],
  //   ["21-50", 140, 120],
  //   ["51-100", 135, 110],
  //   ["101-500", 130, 100],
  // ],
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
};

function StorageInfoPage() {
  const userData = useSelector((state) => state.userReducer.userData);

  const navigate = useNavigate();
  let { id: storageId } = useParams();

  const [storageDetails, setStorageDetails] = useState(null);

  useEffect(() => {
    getStorageDetails();
  }, [storageId]);

  const getStorageDetails = async () => {
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

  return (
    <div className={styles.Wrapper}>
      {storageDetails ? (
        <>
          <NavBar />
          <StorageInfoPageMainComp
            storageDetails={storageDetails}
            refreshDataFun={getStorageDetails}
          />
        </>
      ) : (
        <Preloader />
      )}
      <Footer />
    </div>
  );
}

export default StorageInfoPage;
