import classes from './EventSection.module.css'
import event from './event.svg'

const EventSection = () => {
  return (
    <>
      <section id="Event" className={classes.EventSec}>
        <div className={classes.Event}>
          <div className={classes.composition}>
            <img className={classes.images} src={event} alt="Event" />
          </div>
          <div className={classes.details}>
            <h2 className={classes.heading1}>EVENTS</h2>
            <p className={classes.para}>
              Gurutwa is a technical festival offering a diverse range of events
              and competitions focused on technology and innovation. It provides
              a platform for individuals to showcase their skills, learn from
              others, and foster creativity, teamwork, and problem-solving
              abilities. By exposing attendees to the latest advancements in
              technology, Gurutwa helps broaden their knowledge and skillset,
              making it a fun, engaging, and enriching experience for all
              attendees. Get ready to be a part of the biggest technical
              extravaganza of the year 2k25 – Gurutwa!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSection;
