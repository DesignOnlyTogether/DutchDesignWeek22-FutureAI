import { scrollToElem } from "../utilities";
import React from "react";
import DButton from "./shared/DButton";

const StartSection = () => {
  return (
    <section className="fullpage-center" id="start">
      <h1>Dream Sequencer</h1>
      <h2>
        We are going to ask questions about your past and future.
        <br />
        <p>Your anwsers will be generated by <strong>an image, </strong> and you can see the collection of the images
        by others on the screen.
        </p>
      </h2>
      <DButton text="Let's go!" func={() => 
        scrollToElem("PastSession")} />
    </section>
  );
};

export default StartSection;
