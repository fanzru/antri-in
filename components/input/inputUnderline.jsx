import React from "react";

function InputUnderline(props){

    const data = props.data

    return(
        <div>
            <div className="flex border-b border-gray-200 w-full mb-5 pb-2">
                <input type={data.type} className='bg-transparent border-none w-full focus:outline-none' placeholder={data.placeholder}/>
            </div>
        </div>
    )
}

export default InputUnderline;