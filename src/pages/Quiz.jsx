import React from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../components";

function Quiz() {
  const { quizId } = useParams();
  return (
    <div>
      <Hero
        img="/src/assets/quizHero.gif"
        headText={"Dive into Endless Learning Possibilities"}
        subText={"Explore Our Collection of Quizzes on Mayeso"}
      />
      <div className="py-10">
        <h1 className="text-5xl text-center">QuizID: {quizId}</h1>
      </div>
    </div>
  );
}

export default Quiz;
