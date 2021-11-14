import React from 'react';

function Backgound(props) {
  return (
    <div className={"relative"} style={{zIndex: "-1"}}>
      <div className={"h-[500px] w-[500px] right-48 -top-64 z-auto rounded-full fixed bg-red-500"} />
      <div className={"h-[100px] w-[100px] -right-16 top-60 z-auto rounded-full fixed bg-red-200 "} />
      <div className={"h-[32px] w-[32px] left-80 top-16 z-auto rounded-full fixed bg-gray-400 "} />
    </div>
  );
}

export default Backgound;