import React, { useState, useEffect } from "react";
import InputUnderline from "../input/inputUnderline";
import { useSelector } from "react-redux";
import { selectDaftarData } from "../../redux/daftarSlice";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { createToastError, createToastSuccess, createToastWarning, selectToast } from "../../redux/toastSlice";
import Image from 'next/image'

function Createaccount() {
  const router = useRouter()
  const [Loading, setLoading] = useState(false);
  const dataDaftar = useSelector(selectDaftarData);
  const dispatch = useDispatch(selectToast)
  const [GagalText, setGagalText] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const { nama, email, password } = dataDaftar;
    if (
      nama.replace(/\s+/g, "") == "" ||
      email.replace(/\s+/g, "") == "" ||
      password.replace(/\s+/g, "") == ""
    ) {
      dispatch(createToastWarning("Nama, Email, dan Password harus diisi"));
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
        dispatch(createToastSuccess("Berhasil mendaftarkan akun, menunggu persetujuan admin"))
        router.push("/masuk")
      })
      .catch(function (err) {
        var res = err.response.data;
        setGagalText(res.message);
        setLoading(false);
      });
  };

  const tombolSubmit = () => {
    return  Loading ? (
      <div className="flex bg-red-300 content-center items-center justify-center rounded-lg gap-2 h-10 w-full select-none text-white font-bold my-4">
        <ClipLoader size={23} color="white" />
        <p className="text-center">Processing</p>
      </div>
    ) : (
      <button
        onClick={handleSubmit}
        className="bg-red-600 items-center rounded-lg h-10 w-full text-white font-bold my-4"
      >
        Create Account
      </button>
    ) 
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-2 gap-4 place-items-center py-28 px-5">
        <div className="px-8 md:px-20 pt-12 w-full md:h-full sm:h-screen">
          <span className="font-bold text-xl">Create Account</span>
          <form action="" className="mt-3">
            {ListInput.map((data, id) => {
              return <InputUnderline key={id} data={data} Icon={Icons[id]} />;
            })}
            {GagalText != "" && (
                <div className="bg-red-50 mt-2 p-3 rounded-lg">
                  <p className="text-center text-sm text-red-700 font-bold">
                    {GagalText}
                  </p>
                  <p className="text-center text-sm text-red-400">
                    Please Contact Admin If You're Not Sure
                  </p>
                </div>
              )}
            {tombolSubmit()}
          </form>
          <span className="text-gray-500 text-sm">
            Already have an account?{" "}
            <a onClick={() => { router.push("/masuk") }} className="cursor-pointer text-red-600">
              Log In
            </a>
          </span>
        </div>
        <div className="hidden md:block">
          <Image src="/ilus-daftar-antri.svg" height={350} width={600} />
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
