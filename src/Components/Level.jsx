import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import level from "../data/level.json";

const Level = ({ progress, setprogress }) => {
  const { interest } = useParams();
  const [click, setClick] = useState(false);
  const [l, setl] = useState("");
  const [ind, setindex] = useState();

  const handleDescribes = (lev,idx) => {
    setClick(true);
    setl(lev);
    setindex(idx);
  };

  return (
    <div
      className="items-center flex flex-col mt-9
    xl:mx-auto  xl:px-4 xl:py-8 xl:mt-9 xl:flex xl:flex-col xl:items-center"
    >
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">{interest}</h1>
      </header>
      <div className="flex gap-8">
        {/* Render question and answer options */}
        {level.map((item, index) => {
          if (item[interest]) {
            return (
              <div
                key={index}
                className=" flex flex-col
                xl:p-4 xl:bg-white xl:rounded-lg xl:shadow-md xl:flex-col xl:w-full xl:flex"
              >
                <h2 className="text-xl font-semibold mb-7 text-center">
                  {item[interest]}
                </h2>
                <h5 className="text-center mb-5">
                  Choose the highest level you feel confident in - you can
                  always adjust later.
                </h5>
                <div className="xl:flex xl:w-full xl:gap-8 lg:gap:10 cursor-pointer">
                  {item.answers.map((answer, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col items-center text-center justify-between p-2 px-4 border hover:border-blue-500 border-gray-200 rounded-lg mb-2 cursor-pointe  ${
                        ind === idx ? "border-green-500" : ""
                      }`}
                      onClick={() =>handleDescribes(answer.level,idx)}
                      >
                      <p className="text-lg">{answer.text}</p>
                      <span className="text-gray-500">{answer.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {click ? (
        <Link
          to={`feedback/${l}`}
          className=" bg-blue-500 size-28 h-8 flex justify-center items-center hover:bg-blue-600 button text-white p-5 mt-8 rounded-lg"
        >
          <button
            onClick={() => {
              localStorage.setItem("progress", progress + 22);
              return setprogress(progress + 22);
            }}
            className="text-white w-full h-full flex items-center justify-center"
          >
            Continue
          </button>
        </Link>
      ) : (
        <Link
          to=""
          className="bg-gray-400 size-28 h-8 flex justify-center items-center p-5 mt-8 rounded-lg "
        >
          <button className="text-white w-full h-full flex items-center justify-center">
            Continue
          </button>
        </Link>
      )}
    </div>
  );
};

export default Level;
