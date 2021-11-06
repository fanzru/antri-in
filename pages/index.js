import React from "react";
import Navbar from "../components/header/navbar.jsx";
import Home from "../components/home/home.jsx";

//import {useInView} from "react-intersection-observer";
//import {useDispatch} from "react-redux";
//import {changeNavbar} from "../redux/navBarSlice";

export default function App() {

  return (
    <div className="font-poppins">
      <Navbar />
      <Home/>
    </div>
  )
}