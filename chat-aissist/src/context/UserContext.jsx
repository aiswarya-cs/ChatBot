"use client";
import React, { createContext, useState } from "react";

export const dataContext = createContext();
export default function UserContext({ children }) {
  const [startRes, setStartRes] = useState(false);
  const [popup, SetPopup] = useState(false);
  let value = {
    startRes,
    setStartRes,
    popup,
    SetPopup,
  };

  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
}
