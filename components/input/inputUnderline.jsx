import React, { useState, useRef } from "react";
import {
  setEmail,
  setNama,
  setPassword,
} from "../../redux/daftarSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectDaftarData } from "../../redux/daftarSlice";
import { validateEmail } from "../../utils/helper/validateEmail";

function InputUnderline(props) {
  const refInput = useRef();
  const dataDaftar = useSelector(selectDaftarData);

  const notValidUnderline =
  "flex rounded-lg ring-1 ring-red-400  border-gray-200 w-full mb-5";
  const validUnderline = "flex rounded-lg w-full mb-5";
  const [validClass, setvalidClass] = useState(notValidUnderline);

  const dispatch = useDispatch();

  const data = props.data;
  const Icon = props.Icon;

  const changeData = (event) => {
    underlineLogic();
    if (data.form == "nama") {
      dispatch(setNama(event.target.value));
    } else if (data.form == "email") {
      dispatch(setEmail(event.target.value));
    } else if (data.form == "password") {
      dispatch(setPassword(event.target.value));
    }
  };

  const underlineLogic = () => {
    let input = refInput.current.value;
    if (data.form == "nama") {
      if (input != "") {
        setvalidClass(validUnderline);
      } else {
        setvalidClass(notValidUnderline);
      }
    } else if (data.form == "email") {
      if (validateEmail(input)) {
        setvalidClass(validUnderline);
      } else {
        setvalidClass(notValidUnderline);
      }
    } else if (data.form == "password") {
      if (input.length >= 6) {
        setvalidClass(validUnderline);
      } else {
        setvalidClass(notValidUnderline);
      }
    }
  };

  return (
    <div>
      <div className={validClass}>
        <div className='inline-flex items-center px-3 rounded-l-lg bg-red-100 shadow-md text-gray-800 text-sm'>
            <Icon/>
        </div>
        <input
          ref={refInput}
          onChange={changeData}
          type={data.type}
          className="p-2 h-10 focus:outline-none focus:shadow-inner shadow-lg placeholder-gray-800 flex w-full rounded-none rounded-r-lg sm:text-sm border-l-2 border-red-300 bg-red-100"
          placeholder={data.placeholder}
          required
        />
      </div>
    </div>
  );
}

export default InputUnderline;
