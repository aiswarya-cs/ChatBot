import React from "react";
import { LuImageUp } from "react-icons/lu";
import { MdOutlineAdd } from "react-icons/md";
import { FaArrowUpLong, FaRegImages } from "react-icons/fa6";

export default function Form({ popup, SetPopup, handleSubmit }) {
  return (
    <>
      {popup && (
        <div
          className="absolute bottom-32 right-[60%] w-[200px] transform -translate-x-1/2 bg-gray-800
          p-2 rounded-lg shadow-lg z-50 border border-slate-700"
        >
          <div className="flex items-center gap-2 p-2 cursor-pointer">
            <LuImageUp className="text-green-700" />
            <h5>Upload Image</h5>
          </div>
          <div className="flex items-center gap-2 p-2 cursor-pointer">
            <FaRegImages className="text-purple-700" />
            <h5>Generate Image</h5>
          </div>
        </div>
      )}

      <form
        className="flex justify-center items-center gap-3 w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          className="p-4 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => SetPopup((prev) => !prev)}
        >
          <MdOutlineAdd />
        </div>

        <div className="w-1/2">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full p-3 text-gray-300 rounded-3xl border border-gray-300 
              focus:outline-none focus:border-gray-400 bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="p-4 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaArrowUpLong />
        </button>
      </form>
    </>
  );
}
