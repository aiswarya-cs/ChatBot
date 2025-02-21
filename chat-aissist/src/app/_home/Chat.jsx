"use client";

import React, { useContext } from "react";
import { dataContext } from "@/context/UserContext";

export default function Chat() {
  let { startRes, setStartRes } = useContext(dataContext);
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-3/4 mb-8">
      <div className="w-1/2 p-3 border border-1 rounded-3xl">
        <img />
        <span>User</span>
      </div>
      <div className="w-1/2 p-3 border border-1 rounded-3xl">
        <img />
        <span>ai</span>
      </div>
    </div>
  );
}
