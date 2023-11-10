import React from "react";
import "./Questions.css";
import QuestionBar from "./QuestionBar";

const Questions = () => {
  const q_title1 = "What are the best tips for finding budget-friendly travel accommodations?";
  const q_title2 = "How can I find authentic local experiences when traveling?";
  const q_title3 = "What should I pack for a long-term trip or backpacking adventure?";
  const q_title4 = "What are some strategies for overcoming jet lag when traveling across time zones?";
  const q_title5 = "What are the visa requirements for popular tourist destinations?";
  return (
    <div className="questions">
      <div className="questions-wrapper">
        <QuestionBar q_number="01" q_title={q_title1} />
        <QuestionBar q_number="02" q_title={q_title2} />
        <QuestionBar q_number="03" q_title={q_title3} />
        <QuestionBar q_number="04" q_title={q_title4} />
        <QuestionBar q_number="05" q_title={q_title5} />

      </div>
    </div>
  );
};

export default Questions;
