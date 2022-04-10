import React, { useEffect } from "react";
import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import styles from "./Bookings.module.css";
import Preloader from "./../../../Preloader/index";
import { useSelector } from "react-redux";
import { fetchStorageBookings } from "../../../../Services/storage.service";
import notify from "./../../../../Utils/Helpers/notifyToast";
import { getUserBookings } from "../../../../Services/user.service";

const tempBookingsData = new Array(10).fill(null).map((_, index) => {
  return {
    image: "https://picsum.photos/400/600?random=" + index,
    name: `Stark Cold Food Storing facility ${index}`,
    noOfBoxes: Math.floor(Math.random() * 100),
    amount: Math.floor(Math.random() * 10000),
    from: new Date(
      2022,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 30),
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60)
    ),
    to: new Date(
      2022,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 30),
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60)
    ),
    address:
      "1, Gr Flr, Manpada, Sv Rd, Nr Manpada, Chowk, Thane (w),  560053, Mumbai",
  };
});

function Bookings() {
  const userData = useSelector((state) => state.userReducer.userData);

  const [bookingsData, setBookingsData] = React.useState(null);

  useEffect(() => {
    fetchBookingsData();
  }, []);

  const fetchBookingsData = async () => {
    setBookingsData(null);
    try {
      if (userData.isStorage) {
        const respData = await fetchStorageBookings(userData.accessToken);
        console.log(respData);
        setBookingsData(respData.bookings);
      } else {
        const respData = await getUserBookings(userData.accessToken);
        console.log(respData);
        setBookingsData(respData.bookings);
      }
    } catch (error) {
      notify("Error while fetching bookings data", "error");
    }
  };

  return (
    <>
      {bookingsData ? (
        <div className={styles.Wrapper}>
          <div className={styles.TopSec}>
            <h3 className={styles.Title}>{PROFILE_DATA.BookingsSec.title}</h3>
          </div>

          <div className={styles.BottomSec}>
            <div className={styles.BookingsList}>
              {bookingsData.map((booking, index) => {
                return (
                  <div
                    className={styles.Booking}
                    key={index}
                    style={
                      index === bookingsData.length - 1
                        ? {
                            borderBottom: "none",
                            paddingBottom: "0",
                          }
                        : index === 0
                        ? { paddingTop: "0" }
                        : {}
                    }
                  >
                    {!userData.isStorage && (
                      <div className={styles.BookingLeftSec}>
                        <img
                          src={booking.image}
                          alt="bookingImg"
                          className={styles.BookingImg}
                        />
                      </div>
                    )}
                    <div className={styles.BookingRightSec}>
                      <h4 className={styles.StorageName}>
                        {userData.isStorage
                          ? booking.userName
                          : booking.storageName}
                      </h4>
                      <h5 className={styles.BookingAmount}>
                        {"₹"}
                        {booking.amount}
                      </h5>
                      <div className={styles.NoOfBoxes}>
                        <div className={styles.KeyValuePair}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.boxes}
                          </h5>
                          <h5 className={styles.Value}>{booking.boxes}</h5>
                        </div>
                      </div>
                      <div className={styles.BookingDates}>
                        <div className={styles.KeyValuePair}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.from}
                          </h5>
                          <h5 className={styles.Value}>
                            {new Date(
                              booking.fromDate._seconds * 1000
                            ).toLocaleDateString()}
                          </h5>
                        </div>
                        <div className={styles.KeyValuePair}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.to}
                          </h5>
                          <h5 className={styles.Value}>
                            {new Date(
                              booking.toDate._seconds * 1000
                            ).toLocaleDateString()}
                          </h5>
                        </div>
                      </div>
                      {!userData.isStorage && (
                        <div className={styles.BookingAddress}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.shippingAddress}
                          </h5>
                          <h5 className={styles.Value}>{booking.address}</h5>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Bookings;
