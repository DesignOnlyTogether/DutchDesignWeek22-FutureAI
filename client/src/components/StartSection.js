import { scrollToElem } from "../utilities";
import React from "react";
import DButton from "./shared/DButton";

const StartSection = () => {
  return (
    <section className="fullpage-center" id="start">
      <h1>Future DDW 2022</h1>
      <h2>
        We are going to ask questions about your past and future.
        <br /> Your answer will appear in the screen as an image generated by an
        AI.
      </h2>
      <DButton text="Let's go!" func={() => 
        scrollToElem("PastSession")} />
    </section>
  );
};

export default StartSection;