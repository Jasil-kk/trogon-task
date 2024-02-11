import React from "react";
import classes from "./SingleView.module.css";
import { Header } from "../../components/Header/Header";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { DownloadOurApp } from "../../components/DownloadOurApp/DownloadOurApp";
import { Contact } from "../../components/Contact/Contact";

export const SingleView = () => {
  return (
    <div className={classes.singleView}>
      <Header />
      <div className={classes.singleView_body}>
        <div className={classes.first_section}>
          <ProfileCard />
          <DownloadOurApp />
          <Contact/>
        </div>
        <div className={classes.second_section}>
            <div className={classes.top_containers}>
        <div className={classes.image_container}>
            <img src="https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className={classes.details_container}></div></div>
        </div>
      </div>
    </div>
  );
};
