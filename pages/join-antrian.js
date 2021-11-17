import React from 'react';
import JoinAntrian from "../components/join-antrian/joinAntrian"
import Navbar from '../components/header/navbar'
import Backgound from "../components/background/backgound";
function joinAntrian(props) {
  return (
    <div>
      <Navbar/>
      <Backgound/>
      <JoinAntrian/>
    </div>
  );
}

export default joinAntrian;