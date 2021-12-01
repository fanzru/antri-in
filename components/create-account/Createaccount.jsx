import React, { useState, useEffect } from "react";
import InputUnderline from "../input/inputUnderline";
import { useSelector } from "react-redux";
import { selectDaftarData } from "../../redux/daftarSlice";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { validateEmail } from "../../utils/helper/validateEmail";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { createToastError, selectToast } from "../../redux/toastSlice";

function Createaccount() {
  const router = useRouter()
  const [Loading, setLoading] = useState(false);
  const [Valid, setValid] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Failed, setFailed] = useState(false);
  const dataDaftar = useSelector(selectDaftarData);
  const dispatch = useDispatch(selectToast)

  const Icons = [
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineLock,
  ]
  const ListInput = [
    {
      type: "text",
      form: "nama",
      placeholder: "Full Name",
    },
    {
      type: "email",
      form: "email",
      placeholder: "Email Address",
    },
    {
      type: "password",
      form: "password",
      placeholder: "Password (min. 6 karakter)",
    },
  ];

  useEffect(() => {
    var { nama, email, password } = dataDaftar;
    if (
      nama.replace(/\s+/g, "") != "" &&
      email.replace(/\s+/g, "") != "" &&
      password.replace(/\s+/g, "") != "" &&
      validateEmail(email) &&
      password.length >= 6
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [dataDaftar]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { nama, email, password } = dataDaftar;
    if (
      nama.replace(/\s+/g, "") == "" ||
      email.replace(/\s+/g, "") == "" ||
      password.replace(/\s+/g, "") == ""
    ) {
      dispatch(createToastError("Nama, Email, dan Password harus diisi"));
      return;
    }
    var bodyFormData = new FormData();
    bodyFormData.append("nama", nama);
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          setSuccess(true);
        } else {
          setFailed(true);
        }
      })
      .catch(function (response) {
        setFailed(true);
      });
  };

  const tombolSubmit = () => {
    return Failed ? (
      <div className="flex p-3 bg-red-300 content-center items-center justify-center rounded-lg h-16 md:h-12 w-full select-none text-white font-bold my-4">
        <p className="text-center">
          Failed Creating Account, Please Contact Admin
        </p>
      </div>
    ) : Success ? (
      <div className="flex p-3 bg-red-300 content-center items-center justify-center rounded-lg h-16 md:h-12 w-full select-none text-white font-bold my-4">
        <p className="text-center">
          Success Creating Account, Waiting For Admin Approval
        </p>
      </div>
    ) : Loading ? (
      <div className="flex bg-red-300 content-center items-center justify-center rounded-lg gap-2 h-10 w-full select-none text-white font-bold my-4">
        <ClipLoader size={23} color="white" />
        <p className="text-center">Processing</p>
      </div>
    ) : Valid ? (
      <button
        onClick={handleSubmit}
        className="bg-red-600 items-center rounded-lg h-10 w-full text-white font-bold my-4"
      >
        Create Account
      </button>
    ) : (
      <div className="flex bg-red-300 content-center items-center justify-center rounded-lg h-10 w-full select-none text-white font-bold my-4">
        <p className="text-center">Create Account</p>
      </div>
    );
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-2 gap-4 place-items-center py-28 px-5">
        <div className="px-8 md:px-20 pt-12 w-full md:h-full sm:h-screen">
          <span className="font-bold text-xl">Create Account</span>
          <form action="" className="mt-3">
            {ListInput.map((data, id) => {
              return <InputUnderline key={id} data={data} Icon={Icons[id]}/>;
            })}
            {tombolSubmit()}
          </form>
          <span className="text-gray-500 text-sm">
            Already have an account?{" "}
            <a onClick={() => {router.push("/login-admin")}} className="text-red-600">
              Log In
            </a>
          </span>
        </div>
        <div className="hidden md:block">
          <img src="ilus-daftar-antri.svg" alt="ilustrasi" />
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
