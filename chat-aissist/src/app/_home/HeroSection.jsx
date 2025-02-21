"use client";

import React, { useContext } from "react";
import { dataContext } from "@/context/UserContext";
import { options } from "@/data/home-data";
import Chat from "./Chat";
import Form from "./Form";

export default function HeroSection() {
  const { startRes, setStartRes, popup, SetPopup } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartRes((prevState) => !prevState);
  };

  return (
    <>
      {!startRes ? (
        <div className="flex flex-col items-center justify-center h-3/4">
          <h1 className="text-center text-2xl font-semibold mb-8">
            What can I assist you with?
          </h1>
          <div className="flex flex-wrap justify-center gap-5">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-gray-300
                  p-3 rounded-xl shadow-md cursor-pointer"
              >
                <h5>{option.label}</h5>
                {option.icon}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Chat />
      )}

      <Form popup={popup} SetPopup={SetPopup} handleSubmit={handleSubmit} />
    </>
  );
}
