import React from "react";
import Home from "../components/home/home";
import Head from 'next/head'

//import {useInView} from "react-intersection-observer";
//import {useDispatch} from "react-redux";
//import {changeNavbar} from "../redux/navBarSlice";

export default function App() {
  return (
    <>
      <Head>
        <title>Antri.In</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </>
  );
}
