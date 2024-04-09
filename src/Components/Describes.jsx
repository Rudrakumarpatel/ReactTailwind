import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faChalkboardUser,
  faGraduationCap,
  faHandsHoldingChild,
  faPerson,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Describes({ progress, setprogress }) {
  const [click, setClick] = useState(false);
  const [Des, setDes] = useState("");

  const handleDescribes = (e) => {
    setDes(e);
    setClick(true);
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center mt-6 w-full">
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
          Which describes you best
        </h1>
        <p className="text-gray-600 font-normal">
          This will help us personalize your experience.
        </p>
        <div className="flex flex-col mt-9 text-sm font-sans w-full lg:w-auto">
          <div
            onClick={() => handleDescribes("student")}
            className={`flex w-full items-center m-1 p-3.5 border border-gray-200 rounded shadow-sm cursor-pointer hover:border-green-500 ${
              Des === "student" ? "border-green-500" : ""
            }`}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              <span className=" text-black">Student</span>or soon to be enrolled
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1 p-3.5 border border-gray-200 rounded shadow-sm cursor-pointer hover:border-green-500 ${
              Des === "professional" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("professional")}
          >
            <FontAwesomeIcon icon={faUserTie} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              <span className=" text-black">Professional </span>or soon to be
              enrolled
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1  cursor-pointer p-3.5 border border-gray-200 rounded shadow-sm hover:border-green-500 ${
              Des === "parent" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("parent")}
          >
            <FontAwesomeIcon icon={faHandsHoldingChild} className="ml-2" />
            <p className="text-gray-600  ml-3 font-normal">
              <span className=" text-black">Parent </span>or soon to be enrolled
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1  cursor-pointer p-3.5 border border-gray-200 rounded shadow-sm hover:border-green-500 ${
              Des === "Lifelong_learner" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("Lifelong_learner")}
          >
            <FontAwesomeIcon icon={faBookOpenReader} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              <span className=" text-black">Lifelong learner </span>
            </p>
          </div>
          <div
            className={`flex  w-full items-center cursor-pointer m-1 p-3.5 border border-gray-200 rounded shadow-sm hover:border-green-500 ${
              Des === "Teacher" ? "border-green=500" : ""
            }`}
            onClick={() => handleDescribes("Teacher")}
          >
            <FontAwesomeIcon icon={faChalkboardUser} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              <span className=" text-black">Teacher</span>
            </p>
          </div>
          <div
            className={`flex  w-full items-center m-1 p-3.5 cursor-pointer border border-gray-200 rounded shadow-sm hover:border-green-500  ${
              Des === "other" ? "border-green-500" : ""
            }`}
            onClick={() => handleDescribes("other")}
          >
            <FontAwesomeIcon icon={faPerson} className="ml-2" />
            <p className="text-gray-600 ml-3 font-normal">
              <span className=" text-black">Other </span>
            </p>
          </div>
        </div>
        {click ? (
          <Link
            to={`Interest/${Des}`}
            className="bg-black size-28 h-8 mt-5 flex justify-center items-center rounded "
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
export default Describes;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// import "./Describes.css";
// import { Link } from "react-router-dom";

// function Describes({ progress, setprogress }) {
//   const [click, setClick] = useState(false);
//   const [Des, setDes] = useState("");

//   const handleDescribes = (e) => {
//     setDes(e);
//     setClick(true);
//   };

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//         <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
//           Which describes you best
//         </h1>
//         <p className="text-gray-600 font-normal">
//           This will help us personalize your experience.
//         </p>
//         <div className="flex flex-col mt-9 mb-5 personalize text-sm font-sans">
//           {["student", "professional", "parent", "Lifelong_learner", "Teacher", "other"].map((item, index) => (
//             <div
//               key={index}
//               className={`flex w-full items-center m-1 p-3.5 border border-gray-200 rounded shadow-sm cursor-pointer hover:border-green-500 ${Des === item ? "border-green-500" : ""}`}
//               onClick={() => handleDescribes(item)}
//             >
//               <FontAwesomeIcon icon={faGraduationCap} className="ml-2" />
//               <p className="text-gray-600 ml-3 font-normal">
//                 <span className=" text-black">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
//               </p>
//             </div>
//           ))}
//         </div>
//         {click ? (
//           <Link
//             to={`Interest/${Des}`}
//             className="bg-black size-28 h-8 flex justify-center items-center rounded mt-4"
//           >
//             <button
//               onClick={() => {
//                 localStorage.setItem('progress', progress + 22);
//                 return setprogress(progress + 22)
//               }}
//               className="text-white w-full h-full"
//             >
//               Continue
//             </button>
//           </Link>
//         ) : (
//           <Link
//             to=""
//             className="bg-gray-400 size-28 h-8 flex justify-center items-center rounded mt-4"
//           >
//             <button className="text-white w-full h-full">Continue</button>
//           </Link>
//         )}
//       </div>
//     </>
//   );
// }

// export default Describes;
