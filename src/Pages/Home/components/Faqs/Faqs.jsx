import React, { useState } from "react";
import "./Faqs.scss";

const Faqs = () => {
  const Array = [
    {
      question: "What is the timing of the workshop?",
      answers:
        "Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.",
    },
    {
      question: "Do we get recordings of the video's?",
      answers:
        "Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.",
    },
    {
      question: "The session is live or pre-recorded?",
      answers:
        "Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.",
    },
    {
      question: "How can I get a refund?",
      answers:
        "Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.",
    },
    {
      question: "Do we get recordings of the video's?",
      answers:
        "Beej Network has a diversified group of investors & founders who operate in the financial ecosystem for economic growth & success.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <section className="faq">
        <h1 className="headings">FAQ's</h1>
        <div className="item">
          {Array.map((item, i) => {
            return (
              <div className="wrapper" key={i}>
                <div className="question" onClick={() => handleSelect(i)}>
                  <h3>{item.question}</h3>
                  <img
                    src={require("../../../../../src/Assets/uparrow.png")}
                    alt=""
                    className={selected === i ? "reverse" : " "}
                  />
                </div>
                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faqs;
