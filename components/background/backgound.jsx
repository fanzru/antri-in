import React from 'react';

function Backgound(props) {
  return (
    <div className={"relative"} style={{zIndex: "-1"}}>
      <div className={"h-[500px] w-[500px] right-48 -top-64 z-auto rounded-full fixed bg-red-500 md:-left-48 md:top-3/4"} />
      <div className={"h-[600px] w-[600px] right-48 -top-64 z-auto rounded-full fixed bg-red-400 hidden md:block md:-right-52 md:-top-36"} />
      <div className={"h-[100px] w-[100px] -right-16 top-60 z-auto rounded-full fixed bg-red-200 md:top-3/4 md:left-96"} />
      <div className={"h-[32px] w-[32px] left-80 top-16 z-auto rounded-full fixed bg-gray-400 "} />
      <div className={"h-[150px] w-[150px] right-80 top-96 z-auto rounded-full fixed bg-gray-200 md:top-3/4"} />
      <div className={"h-[150px] w-[150px] -right-20 bottom-1 z-auto rounded-full fixed bg-gray-400"}/>
    </div>
  );
}

export default Backgound;