import React from "react";
import { Hero } from "../components";

function Home() {
  return (
    <div className="">
      <Hero
        img="src/assets/homeHero.gif"
        headText={"Unlock Your Potential with Mayeso"}
        subText={"Your Personal Learning Companion"}
      />
    </div>
  );
}

export default Home;
