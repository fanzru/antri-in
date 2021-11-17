import React from "react";

function Createaccount(){
    return (
        <div>
            <div className="md:grid md:grid-cols-2 gap-4 place-items-center py-28 px-5">
                <div className="px-20 pt-12 w-full md:h-full sm:h-screen">
                    <span className='font-bold text-xl'>Create Account</span>
                    <form action="" className='mt-3'>
                        <div className="flex border-b border-gray-200 w-full mb-5 pb-2">
                            <input type="text" className='bg-transparent border-none w-full focus:outline-none' placeholder='Full Name'/>
                        </div>
                        <div className="flex border-b border-gray-200 w-full mb-5 pb-2">
                            <input type="text" className='bg-transparent border-none w-full focus:outline-none' placeholder='Email Address'/>
                        </div>
                        <div className="flex border-b border-gray-200 w-full mb-5 pb-2">
                            <input type="password" className='bg-transparent border-none w-full focus:outline-none' placeholder='Password'/>
                        </div>
                        <button className="bg-red-600 rounded-lg h-10 w-full text-white font-bold my-4">Create Account</button>
                    </form>
                    <span className="text-gray-500 text-sm">Already have an account? <a href="/login-admin" className='text-red-600'>Log In</a></span>
                </div>
                <div className='hidden md:block'>
                    <img src="ilus-daftar-antri.svg" alt="ilustrasi" />
                </div>
            </div>
        </div>
    );
}

export default Createaccount;