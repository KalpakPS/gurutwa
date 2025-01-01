import React from "react";
import gurutwaLogo from "/GURUTWA logo white.png";
import classes from "./Footer.module.css";

const gurutwaInsta = "https://www.instagram.com/gurutwa.snmimt/";

const kalpak = "https://www.linkedin.com/in/kalpak-p-s/";
const antony = "https://www.linkedin.com/in/antonypauson/";

const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_gurutwa_img}>
            <div>
              <img
                className={classes.footer_gurutwa}
                src={gurutwaLogo}
                alt="gurutwaLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_gurutwa_des}>
            Gurutwa'25 is the technical festival conducted at SNMIMT, Maliankara. Inspiring innovative minds.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={gurutwaInsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>SNM Institute of Management and Technology, Maliankara, Kerala</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <a href="mailto:snmimtgurutwa@gmail.com?subject=Enquiry&body=Hello!" className={classes.mail}>snmimtgurutwa@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website designed and created by{" "}
          <a
            href={kalpak}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Kalpak P S
          </a>{" "}
          and{" "}
          <a
            href={antony}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Antony Sun
          </a>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
