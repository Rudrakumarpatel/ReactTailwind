import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function Loadingpage() {

  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("Recommend");
    }, 2000);
  });

  return (
    <div className="h-[80vh] justify-center flex flex-col">
      <div className="flex justify-center items-center">
        <div className="spinner-border text-blue-500 h-12 w-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-center text-gray-500 text-sm">Loading...</p>
      <p className="mt-6 font-medium text-xl text-center">
        Rinding learning path recommendations for you based on your responses
      </p>
    </div>
  );
}

export default Loadingpage;
