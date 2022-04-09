import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Styles from "./Footer.module.css";

import { LOGO_IMG, CONTACT_LINKS } from "../../Utils/Constants/StaticData";
import arrorwImg from "../../Assets/Footer/Arrow.svg";

import ImageStackComponent from "./Helpers";
import importAll from "../../Utils/Helpers/importAll";

const images = importAll(
  require.context("../../Assets/Footer/Icons", false, /\.(png|jpe?g|svg)$/)
);

const Company = ["Who We Are", "Careers", "Team", "Report Fraud"];
const CompanyRoutes = ["", "", "", ""];
const Legal = [
  "Terms & Conditions",
  "Refund & Cancellation",
  "Privacy Policy",
  "Cookie Policy",
  "Offer Terms",
];
const LegalRoutes = ["", "", "", "", ""];
const Support = ["help@storesamadhan.abc", "(+91) 1234567890", "(+91) 1234567891"];
const SupportHrefs = [
  "mailto:help@abc.xyz",
  "tel:+911234567890",
  "tel:+911234567891",
];
const SocialMediaIcons = ["Linkedin", "Facebook", "Instagram"];

const CompanyList = Company.map((General, index) => {
  return (
    <li key={index}>
      <Link to={`${CompanyRoutes[index]}`}>{General}</Link>
    </li>
  );
});
const LegalList = Legal.map((Browse, index) => {
  return (
    <li key={index}>
      <Link to={`${LegalRoutes[index]}`}>{Browse}</Link>
    </li>
  );
});
const SupportList = Support.map((Support, index) => {
  return (
    <li key={index}>
      <a href={`${SupportHrefs[index]}`}>{Support}</a>
    </li>
  );
});
const SocialMediaIconsList = SocialMediaIcons.map(
  (SocialMediaIconName, index) => {
    return (
      <ImageStackComponent
        key={index}
        link={CONTACT_LINKS[SocialMediaIconName]}
        normalDisplay={images[`${SocialMediaIconName}.svg`].default}
        hoverDisplay={images[`${SocialMediaIconName}H.svg`].default}
        iconsClass={Styles.Icons}
        iconsWrapperClass={Styles.IconsSubWrapper}
      />
    );
  }
);

function Footer() {
  const footerCompanyLinksRef = useRef(12);
  const footerLegalLinksRef = useRef(123);
  const footerSupportLinksRef = useRef(1234);

  function handleFooterLinkTitleClick(ref) {
    if (ref?.current) {
      if (window.getComputedStyle(ref.current).height === "50px") {
        ref.current.style.height = ref.current.scrollHeight + "px";
        ref.current.childNodes[0].childNodes[1].style.transform =
          "rotate(180deg)";
      } else {
        ref.current.style.height = "50px";
        ref.current.childNodes[0].childNodes[1].style.transform =
          "rotate(0deg)";
      }
    }
  }

  return (
    <footer className={Styles.Wrapper}>
      <div className={Styles.UpperContainer}>
        <div className={Styles.Links}>
          <div ref={footerCompanyLinksRef}>
            <span
              onClick={(e) => {
                handleFooterLinkTitleClick(footerCompanyLinksRef);
              }}
            >
              Company <img src={arrorwImg} className={Styles.Arrow} />
            </span>
            <ul>{CompanyList}</ul>
          </div>
          <div ref={footerLegalLinksRef}>
            <span
              onClick={(e) => {
                handleFooterLinkTitleClick(footerLegalLinksRef);
              }}
            >
              Legal <img src={arrorwImg} className={Styles.Arrow} />
            </span>
            <ul>{LegalList}</ul>
          </div>
          <div ref={footerSupportLinksRef}>
            <span
              onClick={(e) => {
                handleFooterLinkTitleClick(footerSupportLinksRef);
              }}
            >
              Support <img src={arrorwImg} className={Styles.Arrow} />
            </span>
            <ul>{SupportList}</ul>
          </div>
        </div>
      </div>

      <div className={Styles.LowerContainer}>
        <div className={Styles.CompanyLogoWrapper}>
          <a href="/">
            <img src={LOGO_IMG} alt="Logo" />
          </a>
          <div className={Styles.Copyright}>Copyright (c) 2021</div>
        </div>
        <div className={Styles.IconsWrapper}>
          <div
            style={{
              display: "flex",
            }}
          >
            {SocialMediaIconsList}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
