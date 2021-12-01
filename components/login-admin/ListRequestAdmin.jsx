import React from "react";
import { BsCheckLg } from "react-icons/bs"
import axios from "axios";
import { setDataListRequestAdmin, selectRequestAdmin } from "../../redux/requestAdmin";
import { useSelector, useDispatch } from "react-redux";
import { removeElementList } from "../../utils/helper/removeElementList";
import Cookies from 'universal-cookie';
import { createToastWarning, selectToast } from "../../redux/toastSlice";

function ListReqAdmin(props) {
    const dataReq = props.data;
    const idx = props.index;
    var list = useSelector(selectRequestAdmin)
    const dispatch = useDispatch(selectRequestAdmin)
    const dispatchToast = useDispatch(selectToast)
    const cookie = new Cookies();
    var token = cookie.get("token_admin") 
    var config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    const handleAccept = () => {
        axios.post(
            `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/request?id=${dataReq._id}`,  {},config
        ).then((res) => {
            console.log(res)
            list.splice(idx, 1)
            let newList = removeElementList(list, idx)
            dispatch(setDataListRequestAdmin(newList))
        }).catch(e => {
            console.log(e)
            dispatchToast(createToastWarning("Token tidak valid, kembali ke homepage"))
            // nanti balikkin ke homepage yo
        })
    }

    const handleDeclince = () => {
        axios.delete(
            `${process.env.NEXT_PUBLIC_HOSTNAME}/api/admin/request?id=${dataReq._id}`,config
        ).then((res) => {
            console.log(res)
            let newList = removeElementList(list, idx)
            dispatch(setDataListRequestAdmin(newList))
        }).catch(e => {
            console.log(e)
            dispatchToast(createToastWarning("Token tidak valid, kembali ke homepage"))
            // nanti balikkin ke homepage yo
        })
    }

    return (
        <div>
            <div className="bg-red-200 px-5 py-2 my-3 flex justify-between rounded-xl shadow-lg">
                <span className='flex items-center justify-center font-semibold'>{dataReq.nama}</span>
                <div className='py-2 flex gap-3'>
                    <button onClick={handleAccept} className='py-2 w-10 bg-red-500 fill-current text-white flex items-center justify-center'>
                        <BsCheckLg />
                    </button>
                    <button onClick={handleDeclince} className='h-full w-8 bg-red-500 flex items-center justify-center'>
                        <img src="rounded-x-button.svg" alt="x" srcset="" className='h-full p-2' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListReqAdmin;