import { useEffect, useState } from "react";
import React from "react";
import Describes from "./Components/Describes";
import Intereste from "./Components/Interest";
import Insideinterest from "./Components/Insideinterest";
import Level from "./Components/Level";
import Recommendations from "./Components/Recommendations";
import Feedback from "./Components/Feedback";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Route, Routes, useNavigate } from "react-router";
import Loadingpage from "./Components/Loadingpage";

function App() {
  const [progress, setProgress] = useState(22.5)
  const navigate = useNavigate();

  useEffect(() => {
    // let d = localStorage.getItem('progress');
    if (localStorage.getItem("progress")) {
      setProgress(localStorage.getItem("progress"));
    }
  }, [])

  const handleBack = () => {
    navigate(-1);
    localStorage.setItem("progress", progress - 22);
    setProgress(progress - 22);
  }

  return (
    <>
    <div>
    <MdOutlineKeyboardArrowLeft onClick={() => handleBack()} className={`cursor-pointer mt-14 w-7 h-7 ${progress >= 100 ? 'hidden' : 'block'}`}></MdOutlineKeyboardArrowLeft>
        <div className=" bg-gray-200 rounded-full dark:bg-gray-700 ml-16 mr-16">
          {progress <= 100 && (
            <div
              className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full "
              style={{
                width: `${progress}%`,
              }}
            ></div>
          ) 
          }
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Describes progress={progress} setprogress={setProgress}></Describes>} />
        <Route path="/Interest/:name" element={<Intereste progress={progress} setprogress={setProgress}></Intereste>} />
        <Route path="Interest/:name/Insideinterest/:interest" element={<Insideinterest progress={progress} setprogress={setProgress}></Insideinterest>} />
        <Route path="Interest/:name/Insideinterest/:interest/Level/:interest" element={<Level progress={progress} setprogress={setProgress}></Level>} />
        <Route path="Interest/:name/Insideinterest/:interest/Level/:interest/feedback/:level" element={<Feedback progress={progress} setprogress={setProgress}></Feedback>} />
        <Route path="Interest/:name/Insideinterest/:interest/Level/:interest/feedback/:level/Loading" element={<Loadingpage/>} />
        <Route path="Interest/:name/Insideinterest/:interest/Level/:interest/feedback/:level/Loading/Recommend" element={<Recommendations progress={progress} setprogress={setProgress}></Recommendations>} />
      </Routes>
    </>
  )
}
export default App;
