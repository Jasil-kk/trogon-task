import React from "react";
import classes from "./Messages.module.css";
import rizwa from "../../assets/rizwa.jpg";
import faheema from "../../assets/faheema.jpg";
import jezna from "../../assets/jezna.jpg";
import hiba from "../../assets/hiba.jpg";
import sherin from "../../assets/sherin.jpg";

export const Messages = () => {
  const messages = [
    {
      profile: faheema,
      name: "Faheema",
      message: "Talk to u latr",
      time: "12.04 pm",
    },
    {
      profile: hiba,
      name: "Hiba",
      message: "Talk to u latr",
      time: "01.24 pm",
    },
    {
      profile: rizwa,
      name: "Rizwa",
      message: "Talk to u latr",
      time: "11.04 am",
    },
    {
      profile: jezna,
      name: "Jezna",
      message: "Talk to u latr",
      time: "10.16 am",
    },
    {
      profile: sherin,
      name: "Sherin",
      message: "Talk to u latr",
      time: "03.00 pm",
    },
  ];
  return (
    <div className={classes.messages}>
      <div className={classes.heading_wrapper}>
        <h2 className={classes.heading}>Messages</h2>
        <span className={classes.seeAll}>see all</span>
      </div>
      <div className={classes.message_list}>
        {messages?.map((message, index) => (
          <div key={index} className={classes.message_card}>
            <img
              src={message?.profile}
              alt={message?.name}
              className={classes.profile}
            />
            <div>
              <h3 className={classes.name}>{message?.name}</h3>
              <p className={classes.message}>{message?.message}</p>
            </div>
            <span className={classes.time}>{message?.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
