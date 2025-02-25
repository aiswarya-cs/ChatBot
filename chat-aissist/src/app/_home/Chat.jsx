"use client";

import React, { useContext } from "react";
import { dataContext, prevUser } from "@/context/UserContext";

export default function Chat() {
  let { showResult, setShowResult } = useContext(dataContext);

  return (
    <div className="flex flex-col items-center justify-center gap-3 h-3/4 mb-8">
      <div className="w-1/2 h-auto p-4 border border-1 rounded-3xl flex flex-col items-start">
        <img
          src={prevUser.imgUrl}
          className="w-40 h-40 object-contain rounded-sm"
          alt="User"
        />
        <span className="mt-2">{prevUser.prompt}</span>
      </div>

      <div className="w-1/2 h-64 p-4 border border-1 rounded-3xl bg-gray-700 overflow-y-auto">
        <img src="" alt="" className="w-full h-auto" />
        <span>{showResult}</span>
      </div>
    </div>
  );
}
