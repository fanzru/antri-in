import React, {useState} from 'react';
function Navbar(){
  const [view, setView] = useState('Home')
  const menus = ['Home', 'About Us','Join Us']
  return (
    <nav className="bg-gray-white">
      <div className="w-screen px-7 mx-auto">
        <div className="flex justify-between ">
          <div className="flex">
            <a href="#" className="flex items-center">
              <img src="antriin-logo.svg" alt="" className="h-[35px] w-100% object-contain m-2" />
            </a>
          </div>
          <div className="w-1/4 justify-around hidden md:flex">
            {
              menus.map((menu, index) => {
                return (
                  <button className="flex items-center hover:font-semibold transition-all " onClick={() => setView(menu)}> {menu} </button>
                )
              })
            }
          </div>
          <div className="flex items-center md:hidden">
            <button className="p-1 border-2 rounded-md hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;