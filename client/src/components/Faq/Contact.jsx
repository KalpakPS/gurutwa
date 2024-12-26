import Faq from "./Faq";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />
          

          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.9937280146905!2d76.18039007479612!3d10.181164089933707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081a29432d18f1%3A0x4af9af844e138c8e!2sSNMIMT%20ENGINEERING%20COLLEGE%2C%20ERNAKULAM!5e0!3m2!1sen!2sin!4v1735198224505!5m2!1sen!2sin" 
              // width="600"
              // height="450"
              // style="border:0;"
              // allowfullscreen=""
              title="dypcoemap"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
