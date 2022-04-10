import axios from "axios";
import {
  INITIALIZING_BOOKING_URL,
  PAYMENT_VERIFICATION_URL,
} from "../Utils/Constants/APIConstants.js";

import notify from "../Utils/Helpers/notifyToast";

export const paymentInitialization = async (
  accessToken,
  storageId,
  boxes,
  amount,
  phone,
  storageType,
  duration,
  userName
) => {
  try {
    const { data } = await axios.post(
      INITIALIZING_BOOKING_URL,
      {
        storageId,
        boxes,
        amount,
        phone,
        storageType,
        duration,
        userName
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const payementService = async (
  amount,
  orderId,
  bookingId,
  accessToken,
  userData
) => {
  try {
    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "Store Samadhan",
      description: "Payment For Booking Your Storage",
      image: "",
      order_id: orderId,
      handler: async function (response) {
        await PaymentVerification(
          response.razorpay_payment_id,
          response.razorpay_signature,
          orderId,
          bookingId,
          accessToken
        );
      },
      prefill: {
        name: userData?.name,
        email: userData?.email,
        contact: userData.number ? userData?.number : "",
      },
      notes: {
        address: "Store Samadhan Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      notify("Payment Failed", "error");
    });
    rzp1.open();
  } catch (error) {
    alert(error);
  }
};

export const PaymentVerification = async (
  razorpayPaymentId,
  razorpaySignature,
  orderId,
  bookingId,
  accessToken
) => {
  try {
    const { data } = await axios.post(
      PAYMENT_VERIFICATION_URL,
      {
        razorpayPaymentId,
        razorpaySignature,
        orderId,
        bookingId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    notify("Payment Successful", "success");
    return data;
  } catch (error) {
    console.log(error);
  }
};
