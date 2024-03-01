import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Tambah Pengguna Baru", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Tambah Petugas</button>
        </div>
    )
}

function Leads(){

    const {leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLeadsContent())
    }, [])

    

    const getDummyStatus = (index) => {
        if(index % 5 === 0)return <div className="badge">Not Interested</div>
        else if(index % 5 === 1)return <div className="badge badge-primary">In Progress</div>
        else if(index % 5 === 2)return <div className="badge badge-secondary">Sold</div>
        else if(index % 5 === 3)return <div className="badge badge-accent">Need Followup</div>
        else return <div className="badge badge-ghost">Open</div>
    }


    const deleteCurrentLead = (index) => {
        dispatch(openModal({title : "Konfirmasi", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Apakah kamu yakin ingin menghapus petugas ini?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index}}))
    }

    return(
        <>
            
            <TitleCard title="Data Petugas" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Username</th>
                        <th>Level</th>
                        <th>Aksi</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            leads.map((l, k) => {
                                return(
                                    <tr>
                                    <td>1</td>
                                    <td>Testing</td>
                                    <td>test123</td>
                                    <td>petugas</td>
                                    <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5"/></button></td>
                                    <td></td>
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


export default Leads