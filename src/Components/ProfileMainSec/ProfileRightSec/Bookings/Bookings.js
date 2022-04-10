import React, { useEffect } from "react";
import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import styles from "./Bookings.module.css";
import Preloader from "./../../../Preloader/index";

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
  const [bookingsData, setBookingsData] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setBookingsData(tempBookingsData);
    }, 1000);
  }, []);

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
                    <div className={styles.BookingLeftSec}>
                      <img
                        src={booking.image}
                        alt="bookingImg"
                        className={styles.BookingImg}
                      />
                    </div>
                    <div className={styles.BookingRightSec}>
                      <h4 className={styles.StorageName}>{booking.name}</h4>
                      <h5 className={styles.BookingAmount}>
                        {"₹"}
                        {booking.amount}
                      </h5>
                      <div className={styles.NoOfBoxes}>
                        <div className={styles.KeyValuePair}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.boxes}
                          </h5>
                          <h5 className={styles.Value}>{booking.noOfBoxes}</h5>
                        </div>
                      </div>
                      <div className={styles.BookingDates}>
                        <div className={styles.KeyValuePair}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.from}
                          </h5>
                          <h5 className={styles.Value}>
                            {booking.from.toLocaleDateString()}
                          </h5>
                        </div>
                        <div className={styles.KeyValuePair}>
                          <h5 className={styles.Key}>
                            {PROFILE_DATA.BookingsSec.to}
                          </h5>
                          <h5 className={styles.Value}>
                            {booking.to.toLocaleDateString()}
                          </h5>
                        </div>
                      </div>
                      <div className={styles.BookingAddress}>
                        <h5 className={styles.Key}>
                          {PROFILE_DATA.BookingsSec.shippingAddress}
                        </h5>
                        <h5 className={styles.Value}>{booking.address}</h5>
                      </div>
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
