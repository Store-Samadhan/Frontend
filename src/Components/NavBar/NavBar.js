import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

import { LOGO_IMG, PROFILE_IMG } from "../../Utils/Constants/StaticData";
import SearchComponent from "./SearchComponent";

function NavBar({}) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <Link to="/" className={styles.LogoLink}>
          <img src={LOGO_IMG} alt="" className={styles.Logo} />
        </Link>
      </div>
      <Link
        to="/profile/"
        className={styles.ProfileButton + " " + styles.LinkButton}
      >
        <img
          src={PROFILE_IMG}
          alt=""
          className={styles.ProfileButtonImg + " " + styles.LinkButtonIcon}
        />
        <h4 className={styles.ProfileButtonText + " " + styles.LinkButtonText}>
          {"Profile"}
        </h4>
      </Link>
    </div>
  );
}

export default NavBar;
