// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>GURUTWA 25</h2>
            <p className={classes.para}>
            Gurutwa is a vibrant technical festival that showcases talent and 
            creativity through a variety of events and competitions.
            It serves as a platform for participants to demonstrate their skills, 
            collaborate with others, and enhance their creativity, teamwork, 
            and problem-solving abilities. By showcasing the latest trends and 
            advancements in technology, Gurutwa offers attendees a chance to expand 
            their knowledge and skillset. Join us for an engaging and enriching 
            experience at Gurutwa 2k25 — inspiring innovative minds!
            </p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
