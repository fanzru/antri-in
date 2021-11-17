import React from 'react';

function DescriptionAntrian(props) {

  const data = props.data

  return (
    <div className="mt-2 mb-4">
      <div className="font-medium">Antrian        :</div>
      <div>{data.nama}</div>
      <div className="font-medium">Deskripsi      :</div>
      <div>{data.description}</div>
      <div className="font-medium">Jumlah Antrian :</div>
      <div>{data.jumlah_antrian}</div>
    </div>

  );
}

export default DescriptionAntrian;