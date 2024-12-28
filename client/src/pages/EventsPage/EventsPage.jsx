import React, { useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import classes from "./EventsPage.module.css";
import { eventsData } from "../../assets/EventsData";
import ReactGA from "react-ga";

const EventsPage = () => {
    useEffect(() => {
      ReactGA.pageview(window.location.pathname);
    });
  
    return (
      <>
        <div className={classes.events_section}>
          <h1 className={classes.heading}>Events</h1>
          <img src="x" alt="" />
          <div className={classes.events_container}>
            {eventsData.map((eventData, i) => {
              return <EventCard eventData={eventData} key={i} />;
            })}
          </div>
        </div>
      </>
    );
  };

export default EventsPage;