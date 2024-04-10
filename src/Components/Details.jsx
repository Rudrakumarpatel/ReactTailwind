import React from "react";
import cheerleading from "../images/cheerleading.jpg";
import { Link } from "react-router-dom";

function Feedback({ progress, setprogress }) {
  return (
    <>
      <div className="w-full mt-9 h-28 flex flex-col items-center xxl:mt-16">
        <div className="w-full flex flex-col items-center xxl:flex xxl:flex-row xxl:justify-center xxl:w-auto">
          <img
            className="size-96 md:w-auto w-72 h-72 border rounded-xl text-center xxl:ml-5 xxl:mr-24 xxl:size-80"
            src={cheerleading}
            alt="images"
          />
          <div className="text-center xxl:ml-24 ">
            <h1 className="font-bold mt-5 md:text-2xl sm:text-xl xxl:text-3xl">
              You're on your way!
            </h1>
            <section className="md:text-xl sm:text-lg xxl:text-lg xxl:w-96">
              Throught its engaging and well-structured courses,Brilliant has
              taught me mathematical concepts that I previously stuggled to
              understand.I know feel confident approaching both technical job
              interview and real world problem solving situations.
            </section>
          </div>
        </div>
        <Link
          to={`Loading`}
          className="bg-black size-28 h-10 flex justify-center items-center
          text-center rounded-lg button mt-6 sm:text-lg md:text-xl md:text-center
          md:size-32 md:p-2 md:flex md:justify-center xxl:mt-20 xxl:size-48"
        >
          <button
            onClick={() => {
              localStorage.removeItem('progress');
              return setprogress(progress + 22);
            }}
            className="text-white w-full h-full"
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}

export default Feedback;
