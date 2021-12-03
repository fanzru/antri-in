import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Createaccount from "../components/create-account/Createaccount";
import { Provider } from "react-redux";
import { Store } from "../redux/store";

function CreateAccout() {
  return (
      <>
        <Navbar />
        <Backgound />
        <Createaccount />
      </>
  );
}

export default CreateAccout;
