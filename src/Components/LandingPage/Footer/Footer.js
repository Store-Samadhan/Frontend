import React from "react";
import styles from "./Footer.module.css";
import { LOGO_IMG } from "../../../Utils/Constants/StaticData";
import DeliveryBoy from "../../../Assets/LandingPage/DeliveryBoy.svg";

import { ReactComponent as Facebook } from "../../../Assets/SocialMediaIcons/ic_facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/SocialMediaIcons/ic_instagram.svg";
import { ReactComponent as LinkedIn } from "../../../Assets/SocialMediaIcons/ic_linkedin.svg";
import { ReactComponent as HoverFacebook } from "../../../Assets/SocialMediaIcons/h_ic_facebook.svg";
import { ReactComponent as HoverInstagram } from "../../../Assets/SocialMediaIcons/h_ic_instagram.svg";
import { ReactComponent as HoverLinkedIn } from "../../../Assets/SocialMediaIcons/h_ic_linkedin.svg";
import ImageStack from "./ImageStack";

const footerData = [
  {
    title: "Company",
    subComponents: ["Who we are", "carrers", "report fraud", "team"],
  },
  {
    title: "Legal",
    subComponents: [
      "Terms & Condition",
      "Refund & cancellation",
      "Privacy Policy",
      "Cookie Policy",
      "Offer Terms",
    ],
  },
  {
    title: "Support",
    subComponents: ["help@xyz.com", "(+91) 1234567890", "(+91) 1234567890"],
  },
];
const heading = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const copyright = "Copyright © 2022 ";
const socialMediaAssets = [
  {
    src: Facebook,
    hoverSrc: HoverFacebook,
    link: "https://facebook.com/",
  },
  {
    src: Instagram,
    hoverSrc: HoverInstagram,
    link: "https://instagram.com/",
  },
  {
    src: LinkedIn,
    hoverSrc: HoverLinkedIn,
    link: "https://linkedin.com/",
  },
];

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftContainer}>
        <div className={styles.LeftUpperContainer}>
          {footerData.map((data, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h2>{data.title}</h2>
                <div>
                  {data.subComponents.map((subComponent, index) => {
                    return <p key={index}>{subComponent}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.LeftBottomContainer}>
          <img src={LOGO_IMG} alt="Logo" />
          <p>{copyright}</p>
          <div className={styles.IconsWrapper}>
            {socialMediaAssets.map((asset, index) => {
              return (
                <ImageStack
                  key={index}
                  link={asset.link}
                  normalDisplay={<asset.src className={styles.DarkModeIcon} />}
                  hoverDisplay={
                    <asset.hoverSrc className={styles.DarkModeIcon} />
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.RightContainer}>
        <p>{heading}</p>
        <img src={DeliveryBoy} alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
