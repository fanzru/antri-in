import React from "react";
import { HiOutlineMail } from "react-icons/hi";

function InputEmail() {
  return (
    <>
      <div className="mt-6 flex rounded-lg shadow-lg">
        <div className="inline-flex items-center px-3 rounded-l-lg bg-red-100 text-gray-500 text-sm">
          <HiOutlineMail />
        </div>
        <input
          type="text"
          className="p-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-l-2 border-gray-300 bg-red-100 font-bold"
          placeholder="youremail@gmail.com"
        ></input>
      </div>
    </>
  );
}

export default InputEmail;
