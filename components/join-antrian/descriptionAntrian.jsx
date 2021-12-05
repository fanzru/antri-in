import React from "react";

function DescriptionAntrian(props) {
  const data = props.data;
  return (
    <div className="mt-2 mb-4">
      <div className="font-bold">Antrian :</div>
      <div>{data.nama}</div>
      <div className="font-bold">Deskripsi :</div>
      <div>{data.deskripsi}</div>
      <div className="font-bold">Jumlah antrian   : </div>
      <div>{data.max_antrian - data.curr_antrian}</div>
    </div>
  );
}

export default DescriptionAntrian;
