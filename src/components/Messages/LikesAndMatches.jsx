import React from "react";
import classes from "./Messages.module.css";
import rizwa from "../../assets/rizwa.jpg";
import faheema from "../../assets/faheema.jpg";
import jezna from "../../assets/jezna.jpg";
import hiba from "../../assets/hiba.jpg";
import sherin from "../../assets/sherin.jpg";

export const LikesAndMatches = () => {
  const messages = [
    {
      profile: faheema,
      name: "Faheema",
      liked: "Likes you 3 min ago",
      time: "12.04 pm",
    },
    {
      profile: jezna,
      name: "Jezna",
      liked: "Likes you 5 min ago",
      time: "11.59 pm",
    },
    {
      profile: hiba,
      name: "Hiba",
      liked: "Likes you 1h ago",
      time: "11.04 pm",
    },
    {
      profile: sherin,
      name: "Sherin",
      liked: "Likes you 2h ago",
      time: "10.04 pm",
    },
    {
      profile: rizwa,
      name: "Rizwa",
      liked: "Likes you 3h ago",
      time: "9.04 pm",
    },
  ];
  return (
    <div className={classes.messages}>
      <div className={classes.heading_wrapper}>
        <h2 className={classes.heading}>Likes and Matches</h2>
        <span className={classes.seeAll}>see all</span>
      </div>
      <div className={classes.tabs_container}>
        <span className={`${classes.tab} ${classes.active}`}>Likes</span>
        <span className={classes.tab}>Matches</span>
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
              <p className={classes.message}>{message?.liked}</p>
            </div>
            <span className={classes.time}>{message?.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
