import React, { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useRouter } from "next/router";
import Image from 'next/image'
import Cookies from 'universal-cookie';

function Navbar({ goto = "home" | "admin" }) {
  const cookie = new Cookies()
  const [statusMasuk, setStatusMasuk] = useState(false)

  const router = useRouter()
  const [activeBar, setActiveBar] = useState(false);
  const width = useWindowWidth();
  var tokenData = cookie.get("token_admin")
  useEffect(() => {
    if (tokenData) {
      setStatusMasuk(true)
    } else {
      setStatusMasuk(false)
    }
  }, [])

  useEffect(() => {
    if (width > 750) {
      setActiveBar(false);
    }
  }, [width]);

  const handleOnClickButton = () => {
    if (!activeBar) {
      setActiveBar(true);
    } else {
      setActiveBar(false);
    }
  };

  const handleLogo = () => {
    if (goto == "admin") {
      router.push("/admin/")
    } else {
      router.push("/")
    }
  }

  const [view, setView] = useState("Home");

  const handleLogout = (e) => {
    e.preventDefault();
    let token = cookie.get("token_admin")
    if (token) {
      cookie.remove("token_admin")
      setStatusMasuk(false)
      router.push("/")
    }
  }

  const menus = [
    {
      menu: "Home",
      href: '/'
    },
    {
      menu: "About",
      href: '/tentang'
    }
  ];
  return (
    <>
      <nav className="bg-red-100 fixed z-[200]">
        <div className="w-screen px-7 mx-auto h-[51px] flex flex-row items-center justify-between flex-grow">
          <div className="flex">
            <button onClick={handleLogo} className="flex items-center">
              <Image src="/antriin-logo.svg" className="m-2" height={35} width="100%" />
              {/* <img
                  src="../antriin-logo.svg"
                  alt=""
                  className="h-[35px] w-100% object-contain m-2"
                /> */}
            </button>
          </div>
          <div className="w-[300px] justify-around hidden md:flex lg:flex lg:items-center">
            {menus.map((menu, index) => {
              return (
                <button key={index} className="flex items-center hover:font-semibold transition-all " onClick={() => { router.push(menu.href) }}>
                  {menu.menu}{" "}
                </button>
              );
            })}
            {!statusMasuk ?
              <button className="flex items-center transition-all border border-red-400 text-red-400 px-4 py-1 rounded-full hover:bg-red-400 hover:text-white" onClick={() => { router.push("/masuk") }}>
                Masuk
              </button> :
              <button className="flex items-center transition-all border border-red-400 text-red-400 px-4 py-1 rounded-full hover:bg-red-400 hover:text-white" onClick={handleLogout}>
                Keluar
              </button>
            }
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="mobile-menu-button p-1 border-2 rounded-md hover:bg-gray-200"
              onClick={handleOnClickButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-current stroke-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {activeBar && (
            <div className="px-7">
              <motion.div
                className="flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menus.map((menu, index) => {
                  return (
                    <button key={index}
                      className="block py-2 px-4 text-sm text-center container rounded-md hover:bg-red-400 hover:text-white"
                      onClick={() => { router.push(menu.href) }}
                    >
                      {" "}
                      {menu.menu}
                    </button>
                  );

                })}
                {!statusMasuk ?
                  <button className="block text-red-600 font-semibold py-2 px-4 text-sm text-center container rounded-md hover:bg-red-400 hover:text-white"
                    onClick={() => { router.push("/masuk") }}
                  >
                    {" "}
                    Masuk
                  </button> :
                  <button className="block text-red-600 font-semibold py-2 px-4 text-sm text-center container rounded-md hover:bg-red-400 hover:text-white"
                    onClick={handleLogout}
                  >
                    {" "}
                    Keluar
                  </button>
                }
                <span className="h-[0.5rem] w-full" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-[36px]"></div>
    </>
  );
}

export default Navbar;
