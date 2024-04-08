import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faChalkboard,
  faGraduationCap,
  faInfinity,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

function Intereste({ progress, setprogress }) {
  const [click, setClick] = useState(false);
  const [interest, setinterest] = useState("");

  const handleDescribes = (interest) => {
    setinterest(interest);
    setClick(!click);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full mt-6 text-center">
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
          Which are you most interested in?
        </h1>
        <p className="text-gray-600 font-normal">
          Choose just one.This will help us get you started (but won't limit
          your experience)
        </p>
        <div className="flex flex-col mt-9 mb-5 personalize text-sm font-sans w-full lg:w-auto">
          <div
            onClick={() => handleDescribes("Learning")}
            className={`flex  w-full items-center m-1 p-3.5 border border-gray-200 rounded shadow-sm cursor-pointer hover:border-green-500 ${
              interest === "Learning" ? "border-green-500" : ""
            }`}
          >
            <FontAwesomeIcon icon={faChalkboard} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              Learning specific skill to advanced my career
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1 p-3.5 border border-gray-200 rounded shadow-sm cursor-pointer hover:border-green-500 ${
              interest === "Exploring" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("Exploring")}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              Exploring new topics I'm interested in
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1  cursor-pointer p-3.5 border border-gray-200 rounded shadow-sm hover:border-green-500 ${
              interest === "Refreshing" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("Refreshing")}
          >
            <FontAwesomeIcon icon={faInfinity} className="ml-2" />
            <p className="text-gray-600  ml-3 font-normal">
              Refreshing my math foundations
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1  cursor-pointer p-3.5 border border-gray-200 rounded shadow-sm hover:border-green-500 ${
              interest === "Exercising" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("Exercising")}
          >
            <FontAwesomeIcon icon={faBrain} className="ml-2"/>
            <p className="text-gray-600 ml-3 font-normal">
              Exercising my brain to stay sharp
            </p>
          </div>
          <div
            className={`flex  w-full items-center cursor-pointer m-1 p-3.5 border border-gray-200 rounded shadow-sm hover:border-green-500 ${
              interest === "Something" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("Something")}
          >
            <FontAwesomeIcon icon={faLightbulb} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">Something else</p>
          </div>
        </div>
        {click ? (
          <Link
            to={`Insideinterest/${interest}`}
            className="bg-black size-28 h-8 flex justify-center items-center rounded"
          >
            <button
              onClick={() => {
                localStorage.setItem("progress", progress + 22);
                return setprogress(progress + 22);
              }}
              className="text-white w-full h-full"
            >
              Continue
            </button>
          </Link>
        ) : (
          <Link
            to=""
            className="bg-gray-400 size-28 h-8 flex justify-center items-center rounded"
          >
            <button className="text-white w-full h-full">Continue</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Intereste;
