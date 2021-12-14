import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Head from 'next/head';
import Jumbo from "../components/jumbotron/Jumbo";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { selectToast, createToastError } from "../redux/toastSlice";
import Cookies from 'universal-cookie';
import { useRouter } from "next/router";


function jumbotron() {
    const router = useRouter()
    const cookie = new Cookies();
    const dispatch = useDispatch(selectToast)
    const token = cookie.get("token_admin")
    const role = ""
    if (token) {
        role = JSON.parse(atob(token.split('.')[1]))["role"]
    }

    useEffect(() => {
        if (role == "") {
            dispatch(createToastError("Tidak terotorisasi"))
            router.push("/")
        }
    }, [])


    return (
        <div>
            <Head>
                <title>Jumbotron Antri.In</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <Backgound />
            <Jumbo />
        </div>
    )
}

export default jumbotron;