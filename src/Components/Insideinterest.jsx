import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Learning from "../images/Learning_specific.jpg";
import Exploring from "../images/Exlopring_newtopics.jpg";
import Refreshing from "../images/Exploring_math.jpg";
import Exercising from "../images/Exercising_brain.jpg";
import Something from "../images/Something.jpg"
import data from "../data/data.json";
import React from "react";
function Insideinterest({ progress, setprogress }) {
  const { interest } = useParams();
  return (
    <>
      <div className="flex justify-center flex-col items-center w-full xxl:flex xxl:w-full ">
        <div className="flex-col justify-center items-center mt-10
        lg:w-full lg:innercontainer lg:flex lg:flex-row xxl:flex 
         lg:items-center lg:mt-10 ">
          <img
            className="rounded-2xl h-auto  lg:w-96 lg:h-auto lg:rounded-2xl lg:ml-5"
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
                : ""
            }
            alt="images"
          />
          <div className="p-6 ml-10 flex justify-center items-center flex-wrap text-center 
          xl:w-50 xl:h-50 lg:w-45 lg:h-45 lg:flex-wrap xxl:flex xxl:flex-col xxl:ml-60">
            <h1 className="lg:text-4xl sm:text-3xl sm:font-bold font-bold
            xsm:text-xl xsm:font-bold ">You're in the right place</h1>
            <section className="xxl:text-center xxl:w-96" >{data[`${interest}`]}</section>
          </div>
        </div>
        <Link
          to={`Level/${interest}`}
          className="bg-black size-28 h-8 flex justify-center items-center rounded button mt-3 xxl:mt-10 xxl:h-12 xxl:w-32"
        >
          <button
             onClick={() => {
              localStorage.setItem('progress',progress + 22);
              return setprogress(progress + 22)
            }}
            className="text-white w-full h-full mb-1"
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}
export default Insideinterest;
