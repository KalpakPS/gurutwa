import classes from './EventSection.module.css'
import event from './event.svg'
import Button from '../Button/Button';

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
            Gurutwa's events are designed to ignite innovation and inspire 
            creativity. From technical challenges and coding competitions 
            to workshops and hackathons, our diverse lineup offers something 
            for everyone. These events provide participants with opportunities 
            to test their skills, collaborate with peers, and tackle real-world 
            problems through teamwork and critical thinking. Whether you're 
            a tech enthusiast, a problem-solver, or a creative thinker, 
            Gurutwa's events promise an engaging and enriching experience 
            that pushes boundaries and celebrates technological excellence. 
            Get ready to learn, compete, and innovate at Gurutwa 2k25!
            </p>
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSection;
