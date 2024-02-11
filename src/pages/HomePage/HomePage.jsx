import React from "react";
import classes from "./HomePage.module.css";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { Header } from "../../components/Header/Header";
import { DownloadOurApp } from "../../components/DownloadOurApp/DownloadOurApp";
import { PartnerProfileCard } from "../../components/PartnerProfileCard/PartnerProfileCard";
import { Messages } from "../../components/Messages/Messages";
import { LikesAndMatches } from "../../components/Messages/LikesAndMatches";
import { Contact } from "../../components/Contact/Contact";
import rizwa from "../../assets/rizwa.jpg";
import faheema from "../../assets/faheema.jpg";
import jezna from "../../assets/jezna.jpg";
import hiba from "../../assets/hiba.jpg";
import sherin from "../../assets/sherin.jpg";

export const HomePage = () => {
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

  return (
    <div className={classes.homePage}>
      <Header />
      <div className={classes.homePage_body}>
        <div className={classes.first_section}>
          <ProfileCard />
          <DownloadOurApp />
        </div>
        <div className={classes.second_section}>
          {partners?.map((partner, index) => (
            <PartnerProfileCard
              key={index}
              picture={partner?.picture}
              name={partner?.name}
              distance={partner?.distance}
              description={partner?.description}
            />
          ))}
        </div>
        <div className={classes.third_section}>
          <Messages />
          <LikesAndMatches />
          <Contact />
        </div>
      </div>
    </div>
  );
};
