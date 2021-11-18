import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";

function InputPass() {
  return (
    <>
      <div className="mt-6 flex rounded-lg shadow-lg">
        <div className="inline-flex items-center px-3 rounded-l-lg bg-red-100 text-gray-500 text-sm">
          <HiOutlineLockClosed />
        </div>
        <input
          type="password"
          className="p-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-l-2 border-gray-300 bg-red-100"
          placeholder="Password"
        ></input>
      </div>
    </>
  );
}

export default InputPass;
