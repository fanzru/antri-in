import React, {useEffect} from "react";
import IsiDataAntrian from "../../../components/login-admin/IsiDataAntrian";
import Backgound from "../../../components/background/backgound";
import Navbar from "../../../components/header/navbar";
import Head from 'next/head'
import { useDispatch } from "react-redux";
import { selectToast, createToastError } from "../../../redux/toastSlice";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";

function AddAntrian() {
    const router = useRouter()
    const cookie = new Cookies();
    const dispatch = useDispatch(selectToast)
    const token = cookie.get("token_admin")
    const role = ""
    if (token) {
        role = JSON.parse(atob(token.split('.')[1]))["role"]
    }

    useEffect(() => {
        if (role == "" || role != "super") {
            dispatch(createToastError("Tidak terotorisasi"))
            router.push("/")
        }
    }, [])

    return (
        <>
            <Head>
                <title>Tambah Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <IsiDataAntrian />
        </>
    )
}

export default AddAntrian;