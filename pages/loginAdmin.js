import React from 'react';
import Navbar from '../components/header/navbar'
import Backgound from "../components/background/backgound";

function loginAdmin() {
  return (
    <div>
      <Backgound/>
      <div className={"z-50"}>
        <Navbar/>
        <div className='md:grid md:grid-cols-2 gap-4 place-items-center py-20 px-5'>
          <div className='hidden md:block'>
            <img className='' src='antriin-ilus.svg'></img>
          </div>
          <div className='p-8'>
            <span className='text-2xl font-bold'>Sign in</span>
            <form className='py-3'>
              <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    logo
                  </span>
                  <input type="text"  className="focus:ring-indigo-500 focus:border-indigo-500 placeholder-black flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 bg-red-300" placeholder="youremail@gmail.com"></input>
              </div>
              <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    logo
                  </span>
                <input type="password" className="focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 bg-red-300" placeholder="***********"></input>
              </div>
              <a className='text-right block font-bold' href=''>Lupa Kata sandi?</a>
              <div className='flex justify-between py-4'>
                <button className='bg-red-500 rounded-md h-10 w-20 text-white'>Masuk --</button>
                <button className='bg-white rounded-md h-10 w-20 border border-red-600'>Daftar</button>
              </div>
            </form>
          </div>      
        </div>
      </div>
    </div>
  );
}

export default loginAdmin;