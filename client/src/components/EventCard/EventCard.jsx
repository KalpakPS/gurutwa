import React from "react";
import classes from "./EventCard.module.css";
import { NavLink } from "react-router-dom";

const EventCard = ({ eventData }) => {
  const { id, image, name } = eventData;
  return (
    <>
      <NavLink to={`/events/${id}`}>
        <div className={classes.card}>
          <div className={classes.card2}>
            <h3 className={classes.event_name}>{name}</h3>
            <div className={classes.img_container}>
              <img
                className={classes.event_image}
                src={image}
                alt="eventImage"
              />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default EventCard;
