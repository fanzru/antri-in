import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillPersonFill, BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { selectToast, createToastError, createToastSuccess } from "../../redux/toastSlice";
import axios from "axios";
import Modal, { DefaultModalData } from "../modal/Modal";

function InformationAntrian() {
  const cookie = new Cookies();
  const token = cookie.get("token_admin");
  const role = "";
  if (token) {
    role = JSON.parse(atob(token.split(".")[1]))["role"];
  }
  const dispatch = useDispatch(selectToast);

  const router = useRouter();
  const [DataAntrianNow, setDataAntrianNow] = useState();
  const [Loaded, setLoaded] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(DefaultModalData);
  const [AntrianID, setAntrianID] = useState(router.query.id)

  const getDataAntrianNow = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/antrian?pengantri=true&id=${router.query.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.data;
        setDataAntrianNow(data);
        setLoaded(true);
      })
      .catch((e) => {
        router.push("/admin/");
        dispatch(createToastError("Error dalam mengambil data antrian"));
      });
  };

  useEffect(() => {
    var interval = setInterval(getDataAntrianNow, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTambahNomor = () => {
    /// Setup modal
    modalData.message =
      "Apakah anda yakin untuk menambah nomor antrian " + DataAntrianNow.antrian.nama; // Must

    modalData.acceptMessage = "Iya"; // Optional
    modalData.onAccept = async () => {
      // Must if acceptMessage is not empty
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_HOSTNAME}/api/tambah?id=${DataAntrianNow.antrian._id}`,
          {},
          config
        )
        .then((res) => {
          dispatch(createToastSuccess("Berhasil menambahkan nomor antrian"));
        })
        .catch((err) => {
          console.log(err)
          dispatch(createToastError("Gagal menambahkan nomor antrian"));
        });
      setShowModal(false); // Kalau mau ditutup setelah di klik,harus tambahin ini
    };

    modalData.declineMessage = "Tidak"; // Optional
    modalData.onDecline = () => {
      // Must if declineMessage is not empty
      setShowModal(false); // Kalau mau ditutup setelah di klik, harus tambahin ini
    };
    setModalData(modalData);
    setShowModal(true);
  };

  const handleHapusPengantri = (dataPengantri) => {
    /// Setup modal
    modalData.message =
      "Apakah anda yakin untuk menghapus pengantri " + dataPengantri.nama + " ?"; // Must

    modalData.acceptMessage = "Iya"; // Optional
    modalData.onAccept = async () => {
      // Must if acceptMessage is not empty
      var bodyFormData = new FormData();
      bodyFormData.append("token_id", dataPengantri._id);
      await axios.delete(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/pengantri`, { data: bodyFormData })
        .then(res => {
          dispatch(createToastSuccess("Berhasil membatalkan antrain"))
          router.push("/admin/")
        })
        .catch(err => {
          dispatch(createToastError("Tidak dapat membatalkan atrian"))
          router.push("/admin/")
        })
      setShowModal(false); // Kalau mau ditutup setelah di klik,harus tambahin ini
    };

    modalData.declineMessage = "Tidak"; // Optional
    modalData.onDecline = () => {
      // Must if declineMessage is not empty
      setShowModal(false); // Kalau mau ditutup setelah di klik, harus tambahin ini
    };
    setModalData(modalData);
    setShowModal(true);
  };

  const handleHapusAntrian = (dataPengantri) => {
    /// Setup modal
    modalData.message =
      `Apakah anda yakin untuk menghapus antrian ${DataAntrianNow.antrian.nama} dengan ${DataAntrianNow.pengantri.length} pengantri akan dibatalkan?`; // Must

    modalData.acceptMessage = "Iya"; // Optional
    var config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    modalData.onAccept = async () => {
      // Must if acceptMessage is not empty
      await axios.delete(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/antrian?id=${AntrianID}`, config)
        .then(res => {
          dispatch(createToastSuccess("Berhasil menghapus antrian"))
          router.push("/admin/")
        })
        .catch(err => {
          dispatch(createToastError("Tidak dapat menghapus antrian"))
          router.push("/admin/")
        })
      setShowModal(false); // Kalau mau ditutup setelah di klik,harus tambahin ini
    };

    modalData.declineMessage = "Tidak"; // Optional
    modalData.onDecline = () => {
      // Must if declineMessage is not empty
      setShowModal(false); // Kalau mau ditutup setelah di klik, harus tambahin ini
    };
    setModalData(modalData);
    setShowModal(true);
  };

  const handleButtonToTambah = () => {
    let id = router.query.id
    console.log(id)
    router.push(`/admin/antrian/[id]/tambah`, `/admin/antrian/${id}/tambah`)
  }

  const renderListPengantri = () => {
    return (
      Loaded && (
        <>
          {/* Ini yang pertama */}
          {DataAntrianNow.pengantri.length > 0 &&
            <div className="flex justify-between items-center p-3 bg-red-200 mb-3 rounded-lg shadow-md">
              <div className="flex flex-col">
                {
                  (DataAntrianNow.pengantri[0].no_antrian == DataAntrianNow.antrian.curr_antrian) &&
                  <p>
                    Pengantri Saat Ini
                  </p>
                }
                <span className="font-semibold">
                  {DataAntrianNow.pengantri[0].nama}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={handleTambahNomor} className="h-full py-1 px-2 bg-red-500 rounded-md shadow-md text-white">
                  Berikutnya
                </button>
                <div className="flex gap-2">
                  {role == "super" && (DataAntrianNow.pengantri[0].no_antrian != DataAntrianNow.antrian.curr_antrian) && (
                    <button onClick={handleHapusPengantri} className="h-full w-8 bg-red-500 flex items-center justify-center rounded-md shadow-md p-2">
                      <Image
                        src="/rounded-x-button.svg"
                        width={35}
                        height={35}
                        alt="x"
                        srcSet=""
                        className="h-full"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          }
          {/* Ini yang selanjutnya */}
          {DataAntrianNow.pengantri.map((v, idx) => {
            if (idx != 0) {
              return (
                <div className="flex justify-between items-center p-3 bg-red-200 mb-3 rounded-lg shadow-md">
                  <span className="font-semibold">{v.nama}</span>
                  <div className="flex gap-2">
                    {/* <button className='h-full py-1 px-2 bg-white rounded-md shadow-md font-semibold'>Edit Antrian</button> */}
                    {role == "super" && (
                      <button onClick={handleHapusPengantri} className="h-full w-8 bg-red-500 flex items-center justify-center rounded-md shadow-md p-2">
                        <Image
                          src="/rounded-x-button.svg"
                          width={35}
                          height={35}
                          alt="x"
                          srcSet=""
                          className="h-full"
                        />
                      </button>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </>
      )
    );
  };

  return (
    <>
      <Modal modalData={modalData} show={ShowModal} />
      <div className="flex h-screen items-center justify-center">
        <div className="w-3/4">
          <div className="flex items-center md:justify-between justify-between py-5 px-5 md:px-14 gap-5 bg-red-400 md:rounded-3xl rounded-lg shadow-lg mb-10">
            {Loaded ? (
              <span className="font-semibold w-1/2">{DataAntrianNow.antrian.nama}</span>
            ) : (
              <span className="font-semibold w-1/2">------</span>
            )}
            {role == "super" && (
              <div className='flex w-1/2 md:w-3/4 gap-5'>
                <button onClick={handleButtonToTambah} className="w-full hidden md:block">
                  <div className="flex justify-between w-full items-center gap-3 bg-white py-3 px-10 rounded-md shadow-md">
                    <p className="font-bold">Tambah Antrian Manual</p>
                    <div className="flex items-center justify-center">
                      <BsPlusLg />
                    </div>
                  </div>
                </button>
                <button onClick={handleHapusAntrian} className='bg-gray-400 w-1/2 my-1 rounded-lg text-white shadow-md'>
                  Hapus Antrian
                </button>
              </div>
            )}
            <div className="flex items-center">
              <div>
                <BsFillPersonFill />
              </div>
              {Loaded ? (
                <span className="font-bold pl-1">
                  {DataAntrianNow.antrian.max_antrian -
                    DataAntrianNow.antrian.curr_antrian}
                </span>
              ) : (
                <span className="font-bold pl-1">-</span>
              )}
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 gap-6 md:p-10 md:bg-gray-400 bg-none rounded-lg md:shadow-lg">
            <div className="md:order-last md:col-span-1">
              <div className="md:order-last mb-12 md:mb-0 bg-red-200 relative justify-center items-center rounded-xl shadow-lg">
                <div className="grid place-items-center pt-5">
                  <span className="font-semibold">Antrian Saat Ini</span>
                  <div className="pb-12 pt-2">
                    {Loaded ? (
                      <span className="text-8xl font-bold">
                        {DataAntrianNow.antrian.curr_antrian}
                      </span>
                    ) : (
                      <span className="text-8xl font-bold">---</span>
                    )}
                  </div>
                  <div className="absolute -bottom-8">
                    <button onClick={handleTambahNomor} className="bg-red-500 p-5 text-white rounded-xl font-semibold">
                      Berikutnya
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-400 md:bg-gray-400 md:col-span-2 p-5 md:p-0 rounded-2xl md:rounded-none shadow-lg md:shadow-none">
              {/* bagian Berikutnya */}
              {renderListPengantri()}

              {/* tambah antrian manual */}
              {role == "super" && (
                <div onClick={handleButtonToTambah} className="md:hidden block md:w-full cursor-pointer">
                  <div className="flex flex-row justify-between items-center bg-white p-3 rounded-lg shadow-md">
                    <p className="font-bold">Tambah Antrian Manual</p>
                    <div className="flex items-center justify-center">
                      <BsPlusLg />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationAntrian;
