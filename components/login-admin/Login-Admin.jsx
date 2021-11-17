import React from 'react';
import Navbar from "../header/navbar";
import Backgound from "../background/backgound";
import {HiArrowNarrowRight} from "react-icons/hi";
import InputEmail from '../input/InputEmail';
import InputPass from '../input/InputPass';

function LoginAdmin() {
    return (
    <div className=''>
      <Backgound/>
      <div className={"z-50"}>
        <Navbar/>
        <div className='md:grid md:grid-cols-2 gap-4 place-items-center py-28 px-5'>
          <div className='hidden md:block'>
            <img className='' src='ilus-antri01.svg'></img>
          </div>
          <div className='px-14 pt-11 md:h-full sm:h-screen'>
            <span className='text-2xl font-bold'>Sign In</span>
            <form className='py-4'>
              <InputEmail/>
              <InputPass/>
              <a className='text-right text-xs underline block font-bold pt-4' href=''>Lupa Kata sandi?</a>
              <div className='flex justify-between py-4'>
                <button className='inline-flex items-center px-6 py-2 bg-red-500 rounded-lg h-10 w-28 text-white'>Masuk 
                <div className='px-2 pt-1'>
                  <HiArrowNarrowRight/>
                </div>
                </button>  
                <button className='bg-red-50 rounded-lg w-28 border-2 border-red-300 text-red-600 font-semibold'><a href="/create-account">Daftar</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default LoginAdmin;