"use client";

import React, { useContext } from "react";
import { dataContext, prevUser, user } from "@/context/UserContext";
import { options } from "@/data/home-data";
import Chat from "./Chat";
import Form from "./Form";
import { generateResponse } from "@/Library/api-data";

export default function HeroSection() {
  const {
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
  } = useContext(dataContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setStartRes(true);
    setShowResult("");
    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
    setInput("");

    try {
      const result = await generateResponse();
      setShowResult(result);
      user.data = null;
      user.mime_type = null;
      user.imgUrl = null;
    } catch (error) {
      console.error("Error handling submission:", error);
    }
  }

  function handleImage(e) {
    setFeature("uploadImage");
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result.split(",")[1];
      user.data = base64;
      user.mime_type = file.type;
      console.log(event);
      user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        hidden
        id="inputImage"
        onChange={handleImage}
      />
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
                onClick={() => {
                  if (option.label === "Generate Image") {
                    setFeature("genImg");
                  } else if (option.label === "Let's Chat") {
                    setFeature("chat");
                  } else if (option.label === "Upload Image") {
                    document.getElementById("inputImage").click();
                  }
                }}
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

      <Form
        popup={popup}
        SetPopup={SetPopup}
        handleSubmit={handleSubmit}
        setInput={setInput}
        input={input}
        feature={feature}
        setFeature={setFeature}
        // uploadInput={document.getElementById("inputImage")}
      />
    </>
  );
}
