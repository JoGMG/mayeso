import React from "react";
import { Hero } from "../components";

function About() {
  return (
    <section className="">
      <Hero
        img="src/assets/aboutHero.gif"
        headText={"Empowering Learning, Enriching Lives"}
        subText={"Discover the Story Behind Mayeso"}
      />
    </section>
  );
}

export default About;
