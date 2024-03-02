import React from "react";
import faqData from "../assets/faq,js";
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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 pb-2 text-center">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="space-y-4">
          {faqData.FAQ.map((faqItem, index) => (
            <div
              key={index}
              className=" py-6 bg-gray-500/20 px-10 rounded shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-accent">
                {faqItem.question}
              </h3>
              <p className="text-secondary">{faqItem.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
