import React, { useState } from "react";
import { questions } from "./api";
import "./accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-sec">
        <h1>React Interview Question</h1>
        {data.map((curElem) => {
          const { id, question, answer } = curElem;
          return <MyAccordion key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};
export default Accordion;
