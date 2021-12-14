import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { selectToast, createToastError } from "../../redux/toastSlice";
import axios from "axios";
import { useRouter } from "next/router";

export default function Jumbo() {
  const router = useRouter();
  const cookie = new Cookies();
  const token = cookie.get("token_admin");
  const dispatch = useDispatch(selectToast);
  const [Loading, setLoading] = useState(true);
  const [ArrAntrian, setArrAntrian] = useState([]);
  const [ArrNumber, setArrNumber] = useState(-1);
  const [TempNomor, setTempNomor] = useState([]);

  const getAntrian = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian`)
      .then((res) => {
        const data = res.data.data;
        setArrAntrian(data);
        if (ArrNumber == -1) {
          setArrNumber(0);
        }
        setLoading(false);
      })
      .catch((e) => {
        dispatch(createToastError("Tidak mendapatkan antrian"));
        router.push("/");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getAntrian();
    }, 1000);
  }, [ArrAntrian]);

  useEffect(() => {
    setTimeout(() => {
      let nomor = 0;
      if (ArrAntrian.length != 0) {
        if (ArrNumber >= ArrAntrian.length - 1) {
          setArrNumber(nomor);
        } else {
          nomor = ArrNumber + 1;
          setArrNumber(nomor);
        }
        buatTempNomor(nomor);
      }
    }, 15000);
  }, [ArrNumber]);

  const buatTempNomor = (nomor) => {
    const Antrian = ArrAntrian[nomor];
    let jumlahPengantri = Antrian["max_antrian"] - Antrian["curr_antrian"];
    let listAkhir = [];
		if (jumlahPengantri > 3) {
			jumlahPengantri = 3
		}
    for (let i = 0; i < jumlahPengantri; i++) {
      let nomorAntrianAsli = Antrian["curr_antrian"] + i + 1;
      if (nomorAntrianAsli < 10) {
        listAkhir.push({ Nomor: `00${nomorAntrianAsli}` });
      } else if (nomorAntrianAsli < 100) {
        listAkhir.push({ Nomor: `0${nomorAntrianAsli}` });
      } else {
        listAkhir.push({ Nomor: `${nomorAntrianAsli}` });
      }
    }
    setTempNomor(listAkhir);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {Loading ? (
        <p>Memuat antrian</p>
      ) : (
        <>
          {ArrNumber == -1 || ArrNumber > ArrAntrian.length - 1 ? (
            <p>Tidak ada Antrian</p>
          ) : (
            <div class="bg-white w-[70%] border-4 border-gray-300 rounded-md shadow-[19px_16px_15px_-1px_rgba(0,0,0,0.29)]">
              <div className="p-5">
                <div className="border-b-4 border-black flex flex-col">
                  <span className="text-center">Antrian</span>
                  <p className="text-center text-[3rem] font-bold">
                    {ArrAntrian[ArrNumber]["nama"]}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-16">
                  <div className="col-span-2 relative">
                    {/* List Nomor Antrian */}
                    <div className="grid grid-cols-2 gap-3">
                      {TempNomor.length != 0 ? (
                        TempNomor.map((Nomor, Index) => {
                          return (
                            <div
                              key={Index}
                              className={
                                Index === 2
                                  ? "col-span-2 bg-red-500 p-8 grid place-items-center rounded-2xl"
                                  : "bg-red-500 p-8 grid place-items-center rounded-2xl"
                              }
                            >
                              <div
                                className={
                                  Index === 0 ? "absolute -top-6" : "hidden"
                                }
                              >
                                <div className="bg-gray-800 flex justify-center px-5 py-3 rounded-xl">
                                  <span className="font-bold text-white">
                                    Berikutnya
                                  </span>
                                </div>
                              </div>

                              <span className="font-semibold">
                                ANTRIAN KE-{Nomor.Nomor}
                              </span>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center select-none font-bold pt-4">
                          Antrian Kosong
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-12 bg-red-200 relative justify-center items-center rounded-xl shadow-lg">
                      <div className="grid place-items-center pt-5">
                        <span className="font-semibold">Antrian Saat Ini</span>
                        <div className="pb-12 pt-2">
                          <span className="text-8xl font-bold">
                            {ArrAntrian[ArrNumber]["curr_antrian"]}
                          </span>
                        </div>
                        {/* <div className='absolute -bottom-8'>
													<div className='flex justify-center bg-red-500 py-5 px-10 text-white rounded-xl font-semibold'>
														<span>
															LOKET?
														</span>
													</div>
												</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
