import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ReactComponent as Arrow } from "../../../Assets/Profile/Arrow.svg";
import styles from "./ProfileLeftSec.module.css";

import { PROFILE_DATA } from "../../../Utils/Constants/StaticData";
import { UPDATE_USER_DATA } from "./../../../Redux/ActionTypes";
import Button from "./../../Button/index";

function ProfileLeftSec() {
  const location = useLocation();
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);

  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch();

  const logout = () => {
    removeCookie("token", { path: "/" });
    dispatch({
      type: UPDATE_USER_DATA,
      data: null,
    });
    navigate("/login");
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.BackButtonWrapper}>
        <Button
          name="Back"
          withIcon
          IconComp={Arrow}
          wrapperClass={styles.BackButton}
          primaryColor="var(--sec-black)"
          onClick={() => {
            navigate("/");
          }}
          inverted
          fullWidth
        />
      </div>
      <div className={styles.TopSec}>
        <img
          src={PROFILE_DATA.images.profileImg}
          alt="profileImg"
          className={styles.ProfileImg}
          onLoad={(e) => {
            e.target.style.opacity = 1;
          }}
        />
        <div className={styles.InfoSec}>
          <h4 className={styles.Name}>{userData.name}</h4>
          <h5 className={styles.Email}>{userData.email}</h5>
        </div>
      </div>

      <div className={styles.LinksAndButtonsSec}>
        {PROFILE_DATA.links.map((link, index) => {
          return (
            !(
              (link.onlySeller && !userData.isSeller) ||
              (link.onlyUser && userData.isSeller)
            ) && (
              <NavLink
                key={index}
                className={
                  styles.BottomItem +
                  " " +
                  (location.pathname.endsWith(link.to)
                    ? styles.BottomItemActive
                    : "")
                }
                style={
                  link.colors && {
                    "--primary-text-color": link.colors.primary,
                    "--background-color": link.colors.secondary,
                  }
                }
                to={`/profile${link.to}`}
              >
                {link.title}
              </NavLink>
            )
          );
        })}
        <div
          className={styles.BottomItem}
          style={{
            "--primary-text-color": `var(--red-primary)`,
            "--background-color": `var(--red-bg)`,
          }}
          onClick={logout}
        >
          {PROFILE_DATA.logout}
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftSec;
