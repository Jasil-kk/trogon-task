import React from "react";
import classes from "./Header.module.css";
import logoutIcon from "../../assets/logout.png";

export const Header = () => {
  return (
    <header className={classes.header}>
      <button className={classes.logout_btn}>
        <img src={logoutIcon} alt="Logout" />
        Logout
      </button>
    </header>
  );
};
