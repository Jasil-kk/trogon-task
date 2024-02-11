import React from "react";
import classes from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className={classes.contact}>
      <ul className={classes.items_contaner}>
        <li>Privacy Policy </li>
        <li>Terms and Condition</li>
        <li>Pricing</li>
        <li>Feedback</li>
        <li>Help & Support</li>
      </ul>
      <div className={classes.social}>
        <FontAwesomeIcon
          icon={faYoutube}
          title="Youtube"
          style={{ color: "#d91375", fontSize: "18px", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          title="Instagram"
          style={{ color: "#d91375", fontSize: "18px", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faFacebookF}
          title="Facebook"
          style={{ color: "#d91375", fontSize: "18px", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          title="Twitter"
          style={{ color: "#d91375", fontSize: "18px", cursor: "pointer" }}
        />
        <span className={classes.copyright}>© 2024 Mynikkah </span>
      </div>
    </div>
  );
};
