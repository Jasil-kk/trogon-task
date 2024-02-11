import React from "react";
import classes from "./ProfileCard.module.css";
import profile from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faMessage,
  faGear,
  faRocket,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";
export const ProfileCard = () => {
  const navItems = [
    { icon: faHouse, text: "Home" },
    { icon: faMessage, text: "Messages" },
    { icon: faGear, text: "Settings" },
    { icon: faRocket, text: "Upgrade" },
    { icon: faBinoculars, text: "Explore" },
  ];
  return (
    <div className={classes.profileCard}>
      <img src={profile} alt="Profile" className={classes.profile_image} />
      <h2 className={classes.name_text}>Muhammed Anas</h2>
      <h3 className={classes.code_text}>MN001XDR</h3>
      <span className={classes.view_profile}>
        {" "}
        <FontAwesomeIcon
          icon={faEye}
          style={{ color: "#b2b2b2", fontSize: "20px" }}
        />{" "}
        View Profile
      </span>
      <ul className={classes.nav_items_container}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${classes.nav_item} ${
              index === 0 ? classes.active : ""
            }`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              style={{
                color: index === 0 ? "#d91375" : "#b2b2b2",
                fontSize: "18px",
              }}
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
