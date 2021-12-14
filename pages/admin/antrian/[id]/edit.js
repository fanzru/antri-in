import EditDataAntrian from "../../../../components/login-admin/EditDataAntrian";
import Backgound from "../../../../components/background/backgound";
import Navbar from "../../../../components/header/navbar";
import Head from 'next/head'
import {useRouter} from "next/router"
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { selectToast, createToastError } from "../../../../redux/toastSlice";
import Cookies from 'universal-cookie';

function EditAntrian() {
    const router = useRouter()
    const id = router.query.id

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
                <title>Edit Antrian</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <EditDataAntrian data={id} />
        </>
    )
}

export default EditAntrian;