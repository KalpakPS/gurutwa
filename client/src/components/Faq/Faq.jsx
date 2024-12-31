import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is GURUTWA 2K25?",
    answer:
      "GURUTWA 2k25 is a techinical festival conducted at SNMIMT.",
  },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "Will update soon",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Will update soon.",
  },
  {
    question: "Is there any entry fee for GURUTWA 2k25?",
    answer:
      "Wil update soon.",
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
