import React from "react";
import { Hero } from "../components";

function FAQ() {
  return (
    <div className="">
      <Hero
        img="src/assets/faqHero.gif"
        headText={"Got Questions? "}
        subText={
          "We've Got Answers! Explore our Frequently Asked Questions to find the information you need."
        }
      />
    </div>
  );
}

export default FAQ;
