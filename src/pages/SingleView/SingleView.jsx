import React, { useState } from "react";
import classes from "./SingleView.module.css";
import { Header } from "../../components/Header/Header";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { DownloadOurApp } from "../../components/DownloadOurApp/DownloadOurApp";
import { Contact } from "../../components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPaperPlane,
  faHeart as heartFilled,
  faPhone,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import tvShow from "../../assets/news-reporter.png";
import photography from "../../assets/camera.png";
import design from "../../assets/paint-palette.png";
import artGallery from "../../assets/mona-lisa.png";
import boardGames from "../../assets/dice.png";
import { useParams } from "react-router-dom";
import rizwa from "../../assets/rizwa.jpg";
import faheema from "../../assets/faheema.jpg";
import jezna from "../../assets/jezna.jpg";
import hiba from "../../assets/hiba.jpg";
import sherin from "../../assets/sherin.jpg";

export const SingleView = () => {
  const [liked, setLiked] = useState(false);
  const { id } = useParams();

  const partners = [
    {
      picture: faheema,
      name: "Faheema",
      distance: "52km from you",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      picture: jezna,
      name: "Jezna",
      distance: "40km from you",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      picture: hiba,
      name: "Hiba",
      distance: "26km from you",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      picture: sherin,
      name: "Sherin",
      distance: "46km from you",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      picture: rizwa,
      name: "Rizwa",
      distance: "16km from you",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
  ];

  const selectedPartner = partners[parseInt(id)];

  const handleLike = () => {
    setLiked(!liked);
  };
  const skills = [
    { icon: tvShow, skill: "TV Shows" },
    { icon: photography, skill: "Photography" },
    { icon: design, skill: "Design" },
    { icon: artGallery, skill: "Art Gallery" },
    { icon: boardGames, skill: "Board Games" },
  ];

  return (
    <div className={classes.singleView}>
      <Header />
      <div className={classes.singleView_body}>
        <div className={classes.first_section}>
          <ProfileCard />
          <DownloadOurApp />
          <Contact />
        </div>
        <div className={classes.second_section}>
          <div className={classes.top_containers}>
            <div className={classes.image_container}>
              <img src={selectedPartner?.picture} alt={selectedPartner?.name} />
              <div className={classes.slide_actions}>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className={classes.details_container}>
              <h2 className={classes.name}>{selectedPartner?.name}</h2>
              <h2 className={classes.userId}>MN001XDR</h2>
              <span className={classes.distance}>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#b2b2b2", fontSize: "15px" }}
                />
                52km from you
              </span>
              <p className={classes.other_details}>Never Married</p>
              <p className={classes.other_details}>
                Bachelors (BSc Computer Science)
              </p>
              <p className={classes.other_details}>
                Kozhikode, Kozhikode, Kerala
              </p>
              <p className={classes.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <h2 className={classes.name}>Interests</h2>
              <div className={classes.skills_container}>
                {skills?.map((skill, index) => (
                  <div key={index} className={classes.skill_card}>
                    <img src={skill?.icon} alt={skill?.skill} /> {skill?.skill}
                  </div>
                ))}
              </div>
              <div className={classes.actions}>
                <div className={`${classes.action} ${classes.showInterset}`}>
                  <FontAwesomeIcon
                    icon={liked ? heartFilled : faHeart}
                    title="Like"
                    style={{
                      color: "#d91375",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                    onClick={handleLike}
                  />
                  Show Interest
                </div>
                <div className={`${classes.action} ${classes.shareProfile}`}>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    title="Share"
                    style={{
                      color: "#512764",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  />
                  Share Profile
                </div>
              </div>
              <button className={classes.requestCall_btn}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    color: "#fffff",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
                Request Call
              </button>
            </div>
          </div>
          <div className={classes.bio_container}>
            <h2 className={classes.heading}>Bio</h2>
            <h3 className={classes.sub_heading}>Basic Information</h3>
            <div className={classes.info_container}>
              <label htmlFor="dob" className={classes.span}>
                Date of Birth{" "}
              </label>
              <p id="dob" className={classes.detail}>
                27-12-1993
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="email" className={classes.span}>
                Email Id{" "}
              </label>
              <p id="email" className={classes.detail}>
                example@gmail.com
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="blood" className={classes.span}>
                Blood Group{" "}
              </label>
              <p id="blood" className={classes.detail}>
                AB+
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="height" className={classes.span}>
                Height
              </label>
              <p id="height" className={classes.detail}>
                164cm
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="weight" className={classes.span}>
                Weight
              </label>
              <p id="weight" className={classes.detail}>
                64kg
              </p>
            </div>
            <h3 className={classes.sub_heading}>Religious Information</h3>
            <div className={classes.info_container}>
              <label htmlFor="relegion" className={classes.span}>
                Religion
              </label>
              <p id="relegion" className={classes.detail}>
                Islam
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="sect" className={classes.span}>
                Sect
              </label>
              <p id="sect" className={classes.detail}>
                Sunni
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="namaz" className={classes.span}>
                Perform Namaz
              </label>
              <p id="namaz" className={classes.detail}>
                Always
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="quran" className={classes.span}>
                Read Qur'an
              </label>
              <p id="quran" className={classes.detail}>
                Daily
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="religiousness" className={classes.span}>
                Religiousness
              </label>
              <p id="religiousness" className={classes.detail}>
                Religious
              </p>
            </div>
            <h3 className={classes.sub_heading}>
              Educational and Professional Information
            </h3>
            <div className={classes.info_container}>
              <label htmlFor="education" className={classes.span}>
                Education
              </label>
              <p id="education" className={classes.detail}>
                Bachelors (Bsc Computer Science)
              </p>
            </div>
            <div className={classes.info_container}>
              <label htmlFor="profession" className={classes.span}>
                Profession
              </label>
              <p id="profession" className={classes.detail}>
                Computer Engineer
              </p>
            </div>
            <button className={classes.seeMore_btn}>Upgrade to See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
