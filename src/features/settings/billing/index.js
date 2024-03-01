import moment from "moment"
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import { openModal } from "../../common/modalSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../../utils/globalConstantUtil'



const BILLS = [
    {idAsset : "1", barang : "AC",           brand : "Daikin",              kategori : "Elektronik", generatedOn : moment(new Date()).add(-30*1, 'days').format("DD MMM YYYY"),  jmlstok : "-"},

    {idAsset : "2", barang : "Almari Kunci", brand : "Premium AF",          kategori : "Furniture", generatedOn : moment(new Date()).add(-30*2, 'days').format("DD MMM YYYY"), jmlstok : "-"},

    {idAsset : "3", barang : "Almari Arsip", brand : "Brother B-104",       kategori : "Furniture", generatedOn : moment(new Date()).add(-30*3, 'days').format("DD MMM YYYY"), jmlstok : "-"},

    {idAsset : "4", barang : "Dispenser",    brand : "Miyako",              kategori : "Furniture", generatedOn : moment(new Date()).add(-30*4, 'days').format("DD MMM YYYY"), jmlstok :"-"},

    {idAsset : "5", barang : "Monitor",      brand : "Logitech",            kategori : "Elektronik", generatedOn : moment(new Date()).add(-30*5, 'days').format("DD MMM YYYY"), jmlstok : "-"},

    {idAsset : "6", barang : "PC",           brand : "Ryzen",               kategori : "Elektronik", generatedOn : moment(new Date()).add(-30*6, 'days').format("DD MMM YYYY"), jmlstok : "-"},

    {idAsset : "7", barang : "IMAC",        brand : "Apple Imac Retina 27", kategori : "Elektronik", generatedOn : moment(new Date()).add(-30*7, 'days').format("DD MMM YYYY"), jmlstok : "-"},

    {idAsset : "8", barang : "UPS",         brand : "",                     kategori : "Elektronik", generatedOn : moment(new Date()).add(-30*8, 'days').format("DD MMM YYYY"), jmlstok : "-"},


]

// const TopSideButtons = () => {

//     // const dispatch = useDispatch()

//     // const openAddNewLeadModal = () => {
//     //     dispatch(openModal({title : "Cetak Laporan", bodyType : ""}))
//     // }

  

//     return(
       
//     )
// }

function Billing(){


    const [bills, setBills] = useState(BILLS)

    const getPaymentStatus = (status) => {
        if(status  === "Paid")return <div className="badge badge-success">{status}</div>
        if(status  === "Pending")return <div className="badge badge-primary">{status}</div>
        else return <div className="badge badge-ghost">{status}</div>
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Visitor Pass',
    onAfterPrint: () => console.log('Printed PDF successfully!'),
    });

   

    return(
        <>
            <TitleCard title="Data Barang" topMargin="mt-2" >
             <div className="inline-block float-right" >
            <button className="btn px-6 btn-sm normal-case btn-primary"  onClick={handlePrint}>Cetak Laporan</button>
            </div>

                {/* Invoice list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full" ref={componentRef}>
                    <thead>
                    <tr>
                        <th>ID Asset</th>
                        <th>Asset / Barang</th>
                        <th>Brand</th>
                        <th>Kategori</th>
                        <th>Jumlah Stok</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.idAsset}</td>
                                    <td>{l.barang}</td>
                                    <td>{l.brand}</td>
                                    <td>{l.kategori}</td>
                                    <td>{l.jmlstok}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Billing