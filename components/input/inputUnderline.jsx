import React, { useEffect, useState, useRef } from "react";
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
    "flex border-b border-red-500 border-gray-200 w-full mb-5 pb-2";
  const validUnderline = "flex border-b border-gray-200 w-full mb-5 pb-2";
  const [validClass, setvalidClass] = useState(notValidUnderline);

  const dispatch = useDispatch();

  const data = props.data;

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
        <input
          ref={refInput}
          onChange={changeData}
          type={data.type}
          className="bg-transparent border-none w-full focus:outline-none"
          placeholder={data.placeholder}
          required
        />
      </div>
    </div>
  );
}

export default InputUnderline;
