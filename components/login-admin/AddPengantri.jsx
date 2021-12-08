import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { selectToast, createToastError, createToastSuccess, createToastWarning } from "../../redux/toastSlice";
import axios from "axios";
import Modal, { DefaultModalData } from "../modal/Modal";
import { trimSpace } from "../../utils/helper/trimSpace";

export default function AddPengatri() {
	const router = useRouter()
	const idPage = router.query.id
	const dispatch = useDispatch(selectToast)

	const [ShowModal, setShowModal] = useState(false);
	const [modalData, setModalData] = useState(DefaultModalData);
	const [DataAntrianNow, setDataAntrianNow] = useState();
	const [Loaded, setLoaded] = useState(false);
	const [DataTambah, setDataTambah] = useState({"nama": "", "no_hp": ""})

	const getDataAntrianNow = async () => {
		await axios
			.get(
				`${process.env.NEXT_PUBLIC_HOSTNAME}/api/antrian?id=${idPage}`
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

	const handleTambahPengantri = (e) => {
		e.preventDefault()
		if (trimSpace(DataTambah.nama) == "" || trimSpace(DataTambah.no_hp) == ""){
			dispatch(createToastWarning("Nama atau Nomor telepon tidak boleh kosong"))
			return
		}

    /// Setup modal
    modalData.message =
      "Apakah anda yakin untuk menambah pengantri?" // Must

    modalData.acceptMessage = "Iya"; // Optional
    modalData.onAccept = async () => {

			var bodyFormData = new FormData();
			bodyFormData.append("antrian_id", idPage);
			bodyFormData.append("no_telp", DataTambah.no_hp);
			bodyFormData.append("nama", DataTambah.nama);
			await axios({
				method: "POST",
				url: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/pengantri`,
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (res) {
					dispatch(createToastSuccess("Berhasil menambahkan pengantri, gunakan nomor HP untuk masuk ke antrian melalui /antri/cek"))
					router.push('/admin/')
				})
				.catch(function (err) {
					dispatch(createToastError("Gagal dalam menambahkan pengantri"))
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

	useEffect(() => {
		console.log(DataTambah)
	}, [DataTambah])

	return (
		<>
			<Modal modalData={modalData} show={ShowModal} />
			<div className='flex h-screen items-center justify-center'>
				<div className='w-3/4'>
					<div className='flex items-center md:justify-center justify-between p-5 gap-3 bg-red-400 rounded-xl shadow-lg mb-10'>
						{Loaded? 
						<span className='font-semibold'>{DataAntrianNow.nama}</span>
						:
						<span className='font-semibold'>---</span>
						}
					</div>
					<div className='md:grid md:grid-cols-3 gap-6 md:p-10 md:bg-gray-500 bg-none rounded-lg md:shadow-lg'>
						<div className='md:order-last md:col-span-1'>
							<div className='mb-12 md:mb-0 bg-red-200 relative justify-center items-center rounded-xl shadow-lg'>
								<div className='grid place-items-center pt-5'>
									<span className='font-semibold'>Nomor Antrian Saat Ini</span>
									<div className='pb-12 pt-2'>
										{Loaded ? 
										<span className='text-8xl font-bold'>{DataAntrianNow.curr_antrian}</span>
										:
										<span className='text-8xl font-bold'>---</span>
										}
									</div>
									<div className='absolute -bottom-8'>
										<button className='bg-red-500 p-5 text-white rounded-xl font-semibold'>Berikutnya</button>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-gray-400 md:bg-red-200 col-span-2 p-5 rounded-2xl shadow-lg'>
							{/* Form nama input */}
							<div className=''>
								<form className='md:grid md:grid-cols-2 md:gap-6' action="">
									<div className=''>
										{/* Nomor Antrian Selanjutnya */}
										<div className='grid md:place-items-start place-items-center mb-6 md:mb-0'>
											<div className='flex justify-between items-center gap-8 px-2 mb-3 text-xs text-white py-2 bg-gray-500 rounded-lg shadow-lg'>
												<span className='font-semibold'>Nomor Antrian Selanjutnya</span>
												{Loaded?
												<span className='font-semibold'>{DataAntrianNow.curr_antrian + 1}</span>
												:
												<span className='font-semibold'>---</span>
												}
											</div>
										</div>
										<div className='mb-3'>
											<input onChange={(e) => {setDataTambah({...DataTambah, nama: e.target.value})}} className='font-bold rounded-lg shadow-lg h-full w-full py-3 px-2 placeholder-gray-500 focus:outline-none' type="text" name="" id="" placeholder='Nama Pengantri' />
										</div>
										<div className='mb-3 '>
											<input onChange={(e) => {setDataTambah({...DataTambah, no_hp: e.target.value})}} className='font-bold rounded-lg shadow-lg h-full w-full py-3 px-2 placeholder-gray-500  focus:outline-none' type="text" name="" id="" placeholder='No. Telp Pengantri' />
										</div>
									</div>

									<div className='mt-16 md:mt-0'>
										<div className='bg-white hidden md:flex flex-col justify-center items-center px-5 py-10 rounded-lg shadow-lg mb-5'>
											{
												Loaded?
												<>
												<span className='text-center font-semibold'>{DataAntrianNow.nama}</span>
												<span className='text-justify mb-4'>{DataAntrianNow.deskripsi}</span>
												<span className='font-semibold'>Total Pengantri</span>
												<span className='font-semibold'>{DataAntrianNow.max_antrian - DataAntrianNow.curr_antrian}</span>
												</>
												:
												<span className='font-semibold'>Loading</span>
											}
										</div>
										<div className='flex gap-2'>
											<button onClick={handleTambahPengantri} className='md:text-sm flex justify-between items-center w-full bg-white p-3 rounded-lg shadow-md'>
												<span className='md:order-last font-bold'>Tambahkan Pengantri</span>
												<div className='flex items-center justify-center'>
													<BsPlusLg />
												</div>
											</button>
											<button onClick={() => router.push("/admin/")} className='hidden md:flex w-20 bg-red-500 items-center justify-center rounded-md shadow-md'>
												<img src="/rounded-x-button.svg" alt="x" srcSet="" className='h-full p-2' />
											</button>
										</div>
									</div>
								</form>
								{/* <span className='font-semibold'>Nama Panjang</span>
														<div className='flex gap-2'>
																<button className='h-full py-1 px-2 bg-white rounded-md shadow-md font-semibold'>Edit Antrian</button>
																<button className='h-full w-8 bg-red-500 flex items-center justify-center rounded-md shadow-md'>
																		<img src="rounded-x-button.svg" alt="x" srcSet="" className='h-full p-2' />
																</button>
														</div> */}
							</div>
							{/* tambah antrian manual */}
							{/* <div className='flex justify-between items-center bg-white p-3 rounded-lg shadow-md'>
														<span className='font-bold'>Tambah Antrian Manual</span>
														<div className='flex items-center justify-center'>
																<BsPlusLg/>
														</div>        
												</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}