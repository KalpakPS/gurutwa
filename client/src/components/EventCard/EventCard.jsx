import React from "react";
import classes from "./EventCard.module.css";
import { NavLink } from "react-router-dom";

const EventCard = ({ eventData }) => {
  const { id, image, name, link } = eventData;

  const handleRegisterClick = (e) => {
    
    e.preventDefault(); // Prevent the NavLink navigation
    e.stopPropagation(); // Stop the click from propagating to the NavLink
    window.open(link, "_blank");
  };

  return (
    <>
      <NavLink to={`/events/${id}`}>
        <div className={classes.card}>
          <div className={classes.card2}>
            <div className={classes.img_container}>
              <img
                className={classes.event_image}
                src={image}
                alt="eventImage"
              />
            </div>
            <h3 className={classes.event_name}>{name}</h3>
            <div className={classes.buttonWrapper}>
              <button className={`${classes.btn} ${classes.outline}`}>DETAILS</button>
              <button className={`${classes.btn} ${classes.fill}`} onClick={handleRegisterClick}>REGISTER</button>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default EventCard;
