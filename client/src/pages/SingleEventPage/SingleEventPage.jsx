import React from "react";
import classes from "./SingleEventPage.module.css";
import { useParams } from "react-router-dom";
import { eventsData } from "../../assets/EventsData";

const SingleEventPage = () => {
  const { eventId } = useParams();
  console.log(eventId);

  const handleRegisterClick = (e) => {
    
    e.preventDefault(); // Prevent the NavLink navigation
    e.stopPropagation(); // Stop the click from propagating to the NavLink
    window.open(link, "_blank");
  };

  const handleShareClick = () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: name,
        text: `Check out this event: ${name}\n${description}`,
        url: currentUrl,
      })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  const requiredEvent = eventsData.find((event) => event.id === +eventId);
  const {
    name,
    image,
    description,
    rules,
    note,
    prizes,
    team,
    fees,
    contactInfo,
    location,
    date,
    link,
    onSpot,
    disqualification,
  } = requiredEvent;

  return (
    <>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img className={classes.eventPoster} src={image} alt="eventName" />
          </div>
          <div className={classes.col2}>
            <h1 className={classes.eventHeading}>{name}</h1>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Description</h2>
              <p className={classes.content}>{description}</p>
            </div>
            <div className={classes.rowcol}>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Team</h2>
                <p className={classes.content}>{team}</p>
              </div>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Fees</h2>
                <p className={classes.content}>{fees}</p>
              </div>
            </div>
            {prizes && (
              <div className={classes.subheading}>
                <h2 className={classes.headingp}>Prizes</h2>
                <ul>
                  {prizes?.map((prize, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {prize}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {rules && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Rules and Regulations</h2>
                <ul>
                  {rules?.map((rule, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {rule}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {disqualification && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Disqualification</h2>
                <ul>
                  {disqualification?.map((rule, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {rule}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className={classes.subheading}>
              <h2 className={classes.heading}>Location</h2>
              <p className={classes.content}>{location}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Date and Timing</h2>
              <p className={classes.content}>{date}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Contact Info</h2>
              {contactInfo?.map((contact, i) => {
                return (
                  <p key={i} className={classes.content}>
                    {contact}
                  </p>
                );
              })}
            </div>
            {note && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Note</h2>
                {note?.map(() => {
                  return <p className={classes.content}>{note}</p>;
                })}
              </div>
            )}
            <div className={classes.buttonWrapper}>
            <button
              className={`${classes.btn} ${classes.fill}`}
              onClick={handleRegisterClick}
            >
              REGISTER
            </button>
            <button
              className={`${classes.btn} ${classes.outline}`}
              onClick={handleShareClick}
            >
              SHARE
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
