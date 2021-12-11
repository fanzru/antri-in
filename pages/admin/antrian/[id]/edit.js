import React from "react";
import EditDataAntrian from "../../../../components/login-admin/EditDataAntrian";
import Backgound from "../../../../components/background/backgound";
import Navbar from "../../../../components/header/navbar";
import Head from 'next/head'
import {useRouter} from "next/router"

function EditAntrian() {
    const router = useRouter()
    const id = router.query.id
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