import React from "react";
import { BsFillPersonFill, BsPencilFill} from "react-icons/bs";

function ListAntrianAdmin(props) {
  const data = props.data;

  return (
    <div className="mt-2 mb-4">
      <div className="flex md:px-8 px-4 py-8 justify-between h-12 place-items-center bg-red-400 rounded-full md:rounded-xl shadow-lg">
        <span className="font-semibold text-sm w-full mr-10 truncate">{data.nama}</span>
        <div className="flex gap-2 h-10 md:gap-8">
            <div className="bg-white rounded-lg md:rounded-sm inline-flex items-center">
                {/* <a 
                    className="font-bold"
                    href=""
                ><span className='hidden md:inline'>Edit</span> Logo</a> */}
                <button
                    className='font-bold flex gap-4 px-2'
                >
                    <span className='hidden md:inline mt-1'>Edit </span>
                    {/* <span className='text-sm md:text-base'>Logo</span> */}
                    <div className='p-2'>
                        <BsPencilFill/>
                    </div>
                </button>
            </div>
            <div className="bg-white rounded-lg md:rounded-md inline-flex items-center">
                {/* <a
                    className='font-semibold' 
                    href=""
                ><span>logo 10</span>
                </a> */}
                <button
                    className='font-semibold flex w-12 px-1'
                >
                    <div className='pt-1 mr-1'>
                        <BsFillPersonFill/>
                    </div>
                    <span>{data.jumlah}</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ListAntrianAdmin;
