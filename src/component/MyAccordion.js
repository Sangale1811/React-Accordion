import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);

    // if (!showAnswer) {
    //   setTimeout(() => {
    //     setShowAnswer(false);
    //   }, 2000);
    // }
  };

  return (
    <>
      <div className="main-heading">
        <p onClick={handleClick}>{showAnswer ? "➖" : "➕"}</p>

        <h3>{question}</h3>
      </div>
      {showAnswer && <p className="answers">{answer}</p>}
    </>
  );
};
export default MyAccordion;
