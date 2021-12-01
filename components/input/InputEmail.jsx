import React, {useState} from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setEmailLogin } from "../../redux/loginSlice";
import { selectLoginData } from "../../redux/loginSlice";

function InputEmail() {
  
  const [Input, setInput] = useState("")
  const dispatch = useDispatch(selectLoginData)

  return (
    <>
      <div className="mt-6 flex rounded-lg shadow-lg">
        <div className="inline-flex items-center px-3 rounded-l-lg bg-red-100 text-gray-800 text-sm">
          <HiOutlineMail />
        </div>
        <input
          type="text"
          className="p-2 h-10 focus:outline-none placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-l-2 border-red-300 bg-red-100 font-semibold"
          placeholder="youremail@mail.com"
          onChange={(e) => {
            dispatch(setEmailLogin(e.target.value))
            setInput(e.target.value)
          }}
        />
      </div>
    </>
  );
}

export default InputEmail;
