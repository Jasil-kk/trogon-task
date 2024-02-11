import React from "react";
import classes from "./PartnerProfileCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPaperPlane,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import tvShow from "../../assets/news-reporter.png";
import photography from "../../assets/camera.png";
import design from "../../assets/paint-palette.png";
import acting from "../../assets/theater.png";
import artGallery from "../../assets/mona-lisa.png";
import boardGames from "../../assets/dice.png";
import cricket from "../../assets/cricket.png";

export const PartnerProfileCard = ({picture,name,description,distance}) => {
  const skills = [
    { icon: tvShow, skill: "TV Shows" },
    { icon: photography, skill: "Photography" },
    { icon: design, skill: "Design" },
    { icon: acting, skill: "Acting" },
    { icon: artGallery, skill: "Art Gallery" },
    { icon: boardGames, skill: "Board Games" },
    { icon: cricket, skill: "Cricket" },
  ];

  return (
    <div className={classes.partnerProfileCard}>
      <img
      src={picture}
        alt={name}
        className={classes.picture}
      />
      <div className={classes.content_section}>
        <div className={classes.name_wrapper}>
          <div>
            <h2 className={classes.name}>{name}</h2>
            <span className={classes.location}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#b2b2b2", fontSize: "15px" }}
              />
              {distance}
            </span>
          </div>
          <div className={classes.actions}>
            <div className={`${classes.circle} ${classes.heart}`}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#d91375", fontSize: "22px" }}
              />
            </div>
            <div className={`${classes.circle} ${classes.share}`}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ color: "#512764", fontSize: "20px" }}
              />
            </div>
            <div className={`${classes.circle} ${classes.info}`}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#512764", fontSize: "22px" }}
              />
            </div>
          </div>
        </div>
        <p className={classes.description}>
          {description}
        </p>
        <h2 className={classes.name}>Interests</h2>
        <div className={classes.skills_container}>
          {skills?.map((skill, index) => (
            <div key={index} className={classes.skill_card}>
              <img src={skill?.icon} alt={skill?.skill} /> {skill?.skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
