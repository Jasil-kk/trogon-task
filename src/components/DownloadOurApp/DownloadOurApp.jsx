import React from "react";
import classes from "./DownloadOurApp.module.css";
import playstore from "../../assets/playstore.png"
import appstore from "../../assets/appstore.png"


export const DownloadOurApp = () => {
  return (
    <div className={classes.downloadOurApp}>
      <h3 className={classes.heading}>Download our App</h3>
      <p className={classes.para}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <img src={playstore} alt="Download" className={classes.download_from}/>
      <img src={appstore} alt="Download" className={classes.download_from}/>

    </div>
  );
};
