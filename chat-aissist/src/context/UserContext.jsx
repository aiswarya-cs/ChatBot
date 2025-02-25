"use client";
import React, { createContext, useState } from "react";

export const dataContext = createContext();

export const user = {
  data: null,
  mime_type: null,
  imgUrl: null,
};

export const prevUser = {
  data: null,
  mime_type: null,
  prompt: null,
  imgUrl: null,
};

export default function UserContext({ children }) {
  const [startRes, setStartRes] = useState(false);
  const [popup, SetPopup] = useState(false);
  const [input, setInput] = useState("");
  const [feature, setFeature] = useState("chat");
  const [showResult, setShowResult] = useState("");

  const value = {
    startRes,
    setStartRes,
    popup,
    SetPopup,
    input,
    setInput,
    feature,
    setFeature,
    showResult,
    setShowResult,
  };

  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
}
