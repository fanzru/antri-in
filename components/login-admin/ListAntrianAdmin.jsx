import React from "react";
import { BsFillPersonFill, BsPencilFill} from "react-icons/bs";

function ListAntrianAdmin(props) {
  const data = props.data;

  return (
    <div className="mb-3 md:mb-6">
      <div className="flex md:px-8 px-4 py-8 justify-between h-20 place-items-center bg-red-400 rounded-full md:rounded-3xl shadow-xl">
        <span className="font-semibold text-sm w-full mr-10 truncate">{data.nama}</span>
        <div className="flex gap-2 h-10 md:gap-8">
            <button className="bg-white rounded-lg inline-flex items-center">
                {/* <a 
                    className="font-bold"
                    href=""
                ><span className='hidden md:inline'>Edit</span> Logo</a> */}
                <div
                    className='font-bold flex gap-3 px-2'
                >
                    <span className='hidden md:inline pt-2 text-xs'>Edit </span>
                    {/* <span className='text-sm md:text-base'>Logo</span> */}
                    <div className='p-2'>
                        <BsPencilFill/>
                    </div>
                </div>
            </button>
            <button className="bg-white rounded-lg md:rounded-md inline-flex items-center">
                {/* <a
                    className='font-semibold' 
                    href=""
                ><span>logo 10</span>
                </a> */}
                <div
                    className='font-semibold flex items-center justify-center w-12'
                >
                    <div className='mr-1'>
                        <BsFillPersonFill/>
                    </div>
                    <span className='text-sm'>{data.max_antrian}</span>
                </div>
            </button>
        </div>
      </div>
    </div>
  );
}

export default ListAntrianAdmin;
