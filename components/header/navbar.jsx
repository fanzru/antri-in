import React, { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useRouter } from "next/router";
import Image from 'next/image'

function Navbar({goto="home"|"admin"}) {
  const router = useRouter()
  const [activeBar, setActiveBar] = useState(false);
  const width = useWindowWidth();
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
      router.push("/admin-page")
    } else {
      router.push("/")
    }
  }

  const [view, setView] = useState("Home");



  const menus = [
    {
      menu: "Home",
      href: '/'
    },
    {
      menu: "About",
      href: '/about'
    },
    {
      menu: "Join Us",
      href: '/'
    }
  ];
  return (
    <>
      <nav className="bg-red-100 fixed">
        <div className="w-screen px-7 mx-auto">
          <div className="flex justify-between ">
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
            <div className="w-1/4 justify-around hidden md:flex lg:flex lg:items-center">
              {menus.map((menu, index) => {
                return (
                  <a key={index} className="flex items-center hover:font-semibold transition-all " href={menu.href}>
                    {menu.menu}{" "}
                  </a>
                );
              })}
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
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menus.map((menu, index) => {
                  return (
                    <a key={index}
                      className="block py-2 px-4 text-sm text-center container rounded-md hover:bg-red-400 hover:text-white"
                      href={menu.href}
                    >
                      {" "}
                      {menu.menu}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <div className="h-[51px]"></div>
    </>
  );
}

export default Navbar;
