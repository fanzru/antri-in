import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from "axios";
import QRCode from "qrcode.react";

function PindaiQRcode() {
    // const QRdata = [
    //     {
    //       image: "https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png",
    //       desc: 'QR 1',
    //     },
    //     {
    //       image: "https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png",
    //       desc: 'QR 2',
    //     },
    //     {
    //       image: "https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png",
    //       desc: 'QR 3',
    //     },
    // ];

    const [Slide, setSlide] = useState(0)
    const [Loaded, setLoaded] = useState(false)
    const [Gagal, setGagal] = useState(false)
    const [QRdata, setDataQR] = useState([])

    const nextSlide = () => {
        let newSlide =
            Slide === QRdata.length - 1
                ? 0 : Slide + 1;
        setSlide(newSlide)
    }

    const PrevSlide = () => {
        let newSlide =
            Slide === 0
                ? QRdata.length - 1 : Slide - 1;
        setSlide(newSlide)
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_HOSTNAME}/ngrok/`)
            .then((res) => {
                var dataFetch = res.data
                var list = []
                console.log("datafetch:", dataFetch)
                for (const [key, value] of Object.entries(dataFetch)) {
                    console.log(key, value)
                    if (dataFetch[key] != null) {
                        list.push({ desc: key, data: value })
                    }
                }
                setDataQR(list)
                setLoaded(true)
            }).catch(err => {
                console.log(err)
                setGagal(true)
            })
        return () => {

        }
    }, [])

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='grid md:grid-cols-2 md:grid-rows-2 gap-y-5 h-3/5 w-3/4'>
                <div className='justify-center md:col-start-2 md:col-end-3 text-xl md:text-3xl'>
                    <span><span className='font-bold'>Pindai QR CODE</span> <span className='hidden md:inline'>disamping</span> <span className='md:hidden'>dibawah</span> untuk<br></br>Pengalaman Mengantri tak terlupakan</span>
                </div>
                <div className='md:row-start-1 md:row-end-1 w-full h-full'>
                    {Loaded ? <div className='grid grid-cols-5'>
                        <div className='col-span-1  flex justify-end items-center mr-4'>
                            {
                                (Loaded && (QRdata.length > 1)) &&
                                <button
                                    onClick={PrevSlide}
                                    className='h-10'
                                >
                                    <FiChevronLeft size={30} />
                                </button>
                            }
                        </div>

                        <div className='col-span-3 '>
                            <span className='font-bold flex justify-center text-center text-md md:text-xl'>Pilih QR Code yang Disediakan</span>
                            {QRdata.map((slide, index) => {
                                return (
                                    <div className=''>
                                        <div className={
                                            index === Slide
                                                ? "block w-full h-auto object-cover bg-white rounded-3xl shadow-lg p-6"
                                                : "hidden"
                                        }>
                                            <QRCode
                                                value={slide.data}
                                                key={index}
                                                renderAs={"svg"}
                                                size={"auto"}
                                            />
                                        </div>
                                        <span className={
                                            index === Slide
                                                ? "flex justify-center font-bold pt-5"
                                                : "hidden"
                                        }>{slide.desc}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='col-span-1  flex justify-start items-center ml-4'>
                            {
                                (Loaded && (QRdata.length > 1)) &&
                                <button
                                    onClick={nextSlide}
                                    className='h-10'
                                >
                                    <FiChevronRight size={30} />
                                </button>
                            }
                        </div>
                    </div>
                    : (Gagal)? <p>Tidak dapat memuat QR Code</p> :
                    <p className="text-center">Memuat QR Code</p>}
                </div>
                <div className='flex justify-center md:justify-start md:col-start-2 md:col-end-3 text-md md:text-lg'>
                    <span className='font-bold text-center'>Dibuat oleh:<br></br><span className='font-normal'>Antri</span>.in</span>
                </div>
            </div>
        </div>

    )
}

export default PindaiQRcode;