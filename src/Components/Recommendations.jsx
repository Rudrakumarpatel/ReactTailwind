import React from "react";
import { useParams } from "react-router";
import LearningP from "../images/Recommandation/History(p).jpg";
import Learning from "../images/Recommandation/History.jpg";
import Exploring from "../images/Recommandation/physics.jpg";
import ExploringP from "../images/Recommandation/chemisty.jpg";
import Exercising  from "../images/Recommandation/music.jpg";
import ExercisingP from "../images/Recommandation/art.jpg"
import SomethingP from "../images/Recommandation/finance.jpg";
import Something from "../images/Recommandation/business.jpg";
import Refreshing from "../images/Recommandation/Arithmetic.jpg";
import RefreshingP from "../images/Recommandation/Basic_Algebra.jpg";
import recommand from "../data/recommandation.json"
function Recommendations({ progress, setprogress }) {
  const { interest, level } = useParams();
 
  return (
    <>
      {console.log(interest, level)}
      <div className="flex flex-col justify-center w-[100vw] h-full mt-9 items-center mb-9">
        <header className="flex-col justify-center items-center mt-10">
          <h1 className="font-bold text-center text-3xl">
            Learning paths based on your answers
          </h1>
          <p className="text-center mt-7">choose one to get started.You can switch anytime</p>
        </header>
        <div className="grid grid-row-2 gap-5 justify-center items-center h-full w-full lg:flex lg:flex-row mt-9 lg:justify-center lg:items-center">
          <div className="relative flex flex-col xl:ml-20 xl:w-96 justify-center items-center w-[100vw]">
            <p className="absolute -top-3 left-7 bg-yellow-300 z-10 text-black rounded-lg p-1 text-base">
              Most Popular
            </p>
            <button className="w-full h-40 rounded flex border justify-between xl:w-96 items-center">
              <p className="mt-5 p-2 text-center flex flex-col flex-wrap ml-5">
                <b>{recommand[interest][0]['name']}:</b>
                {recommand[interest][0]['content']}
              </p>
              <img
                src={
                  interest === "Learning"
                ? LearningP
                : interest === "Exploring"
                ? ExploringP
                : interest === "Refreshing"
                ? RefreshingP
                : interest === "Exercising"
                ? ExercisingP
                : interest === "Something"
                ? SomethingP
                : ""}
                alt="history_image"
                className="sm:w-32 sm:h-full sm:rounded-xl rounded-xl w-24 h-36
                xxl:w-52 xxl:h-full xxl:rounded-xl xl:w-40 xl:rounded-xl xl:h-full"
              />
            </button>
          </div>
          <div className="flex flex-col justify-center xl:w-96 w-[100vw]">
            <button className="w-full h-40 rounded flex border justify-between xl:w-96">
              <p className="mt-5 p-2 text-center flex flex-col flex-wrap ml-5">
                <b>{recommand[interest][1]['name']}:</b>
                {recommand[interest][1]['content']}
              </p>
              <img
                src={
                  interest === "Learning"
                ? Learning
                : interest === "Exploring"
                ? Exploring
                : interest === "Refreshing"
                ? Refreshing
                : interest === "Exercising"
                ? Exercising
                : interest === "Something"
                ? Something
                : ""}
                alt="history_image"
                className="rounded-xl w-24 h-36
                sm:w-32 sm:h-full sm:rounded-xl
                xxl:w-52 xxl:h-full xxl:rounded-xl xl:w-40 xl:rounded-xl xl:h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendations;
