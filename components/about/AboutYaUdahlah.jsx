// noinspection CommaExpressionJS

import React, {useState} from 'react';
import {IoIosArrowBack} from "react-icons/io"
import {useRouter} from "next/router";


function AboutYaUdahlah(props) {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [showMember, setShowMember] = useState(true)
  const [id,setId] = useState({})
  // const handleClickShowMember = (member) => {
  //   console.log(member.id)
  //   setShowMember(false)
  // }
  const handleClick = (e) => {
    e.preventDefault()
    setShow(true);
  }
  
  const members = [
    {
      id: 1,
      name: "Ananda Affan Fattahila",
      slug: "fanzru",
      role: "Front End Engineer",
      email: "fattahilaaf080710@gmail.com",
      desc: "Tetap semangat dan jangan lupa untuk mulai aja dulu"
    },
    {
      id: 2,
      name: "Bijak Alghifan Putra",
      slug: "fanzru",
      role: "Front End Engineer",
      email: "fattahilaaf080710@gmail.com",
      desc: "Tetap semangat dan jangan lupa untuk mulai aja dulu"
    },
    {
      id: 3,
      name: "Fadhil Wisnu Ramadhan",
      slug: "fanzru",
      role: "UI/UX Designer",
      email: "fattahilaaf080710@gmail.com",
      desc: "Tetap semangat dan jangan lupa untuk mulai aja dulu"
    },
    {
      id:4,
      name: "Fendi Irfan Amorokhman",
      slug: "fanzru",
      role: "QA Engineer",
      email: "fattahilaaf080710@gmail.com",
      desc: "Tetap semangat dan jangan lupa untuk mulai aja dulu"
    },
    {
      id: 5,
      name: "Kaenova Mahendra Auditama",
      slug: "fanzru",
      role: "Back End Engineer",
      email: "kaenova@gmail.com",
      desc: "Tetap semangat dan jangan lupa untuk mulai aja dulu"
    },
    {
      id: 6,
      name: "Rachdian Habi Yahya",
      slug: "fanzru",
      role: "UI/UX Designer",
      email: "fattahilaaf080710@gmail.com",
      desc: "Tetap semangat dan jangan lupa untuk mulai aja dulu"
    },
  ]
  const handleBack = (e) => {
    e.preventDefault()
    setShowMember(true)
    router.push("/tentang")
  }

  return (
    <div>
    { showMember ?
        <div>
          { !show ?
            <div className="flex flex-col h-screen mx-10 justify-center">
              <div className="flex flex-col w-full">
                <p className="font-poppins text-5xl font-thin">Antri.<strong className={"font-extrabold"}>In </strong> </p>
                <p className="font-poppins text-medium font-xl text-gray-500">Aplikasi untuk mempermudah antrianmu.</p>
                <p className="mt-32 font-poppins text-medium font-xl text-gray-500">Dikembangkan oleh : Yaudahlah Teams versi 0.1.1.</p>
              </div>
              <button onClick={handleClick} className="mt-4 font-poppins text-medium font-xl text-gray-500 underline">Check Our Team</button>
            </div>
            :
            <div className="flex flex-col h-screen mx-10 justify-center text-gray-500">
              <p className="font-poppins text-5xl font-extrabold"> Yaudahlah </p>
              <p className="font-poppins text-5xl font-thin"> Team </p>
              <p className="mt-4 mb-5 font-poppins text-base font-thin"> Hubungi Kami : </p>
              {members.map((member,index)=>{
                return (
                  <div key={index} >
                    <button onClick={()=> {setId(member), setShowMember(false)}} className="hover:text-red-300">{member.name}</button>
                  </div>
                )
              })}
              <p className="mt-4 mb-5 font-poppins text-base "> made by <strong>love</strong> xoxo.</p>
            </div>
          }
        </div>
        :
        <div>

          <div className={"flex flex-col justify-center mx-10 h-screen"}>
            <div className={"flex mb-10"}>
              <button onClick={handleBack} className={"text-2xl hover:text-red-500 "}>
                <IoIosArrowBack/>
              </button>
            </div>
            <div className="flex flex-col w-full text-gray-500 ">
              <p className=" text-5xl font-bold">{id.name} </p>
              <p className="mt-2 font-bold">{id.role}</p>
              <p className="mt-10 mb-5 ">{id.email}</p>
              <p className="mt-2 ">{id.desc}</p>
            </div>

          </div>

        </div>
    }
    </div>

  )
}

export default AboutYaUdahlah