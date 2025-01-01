import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is GURUTWA 2K25?",
    answer:
      "GURUTWA 2K25 is the technical festival of SNMIMT, featuring a diverse range of events, workshops, and competitions designed to inspire innovation, creativity, and technological excellence.",
  },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "The dates and timings for GURUTWA 2K25 will be announced soon. Stay tuned for updates.",
  },
  {
    question: "How can I participate in the events?",
    answer:
      "You can participate in the events by registering through our events page. Detailed registration instructions will be provided there.",
  },
  {
    question: "Is there any entry fee for GURUTWA 2k25?",
    answer:
      "Information regarding the entry fee will be updated soon. Please check back for the latest details.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
