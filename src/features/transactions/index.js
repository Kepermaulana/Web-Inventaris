import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"
import { openModal } from "../common/modalSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES_TRANSACTION } from '../../utils/globalConstantUtilTrans'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import {Link} from 'react-router-dom'
// import { openModal } from "./transactionSlice.js"

const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

    const dispatch = useDispatch()

    // const openAddTransactionNewModal = () => {
    //     dispatch(openModal({title : "Tambah Barang Baru", bodyType : MODAL_BODY_TYPES_TRANSACTION.TRANSACTION_ADD_NEW}))
    // }

    return(
        <div className="inline-block float-right">
            <Link to="/app/integration"><button className="btn px-6 btn-sm normal-case btn-primary">Tambah Barang</button></Link>
        </div>
    )

}

    // const showFiltersAndApply = (params) => {
    //     applyFilter(params)
    //     setFilterParam(params)
    // }

    // const removeAppliedFilter = () => {
    //     removeFilter()
    //     setFilterParam("")
    //     setSearchText("")
    // }

    // useEffect(() => {
    //     if(searchText == ""){
    //         removeAppliedFilter()
    //     }else{
    //         applySearch(searchText)
    //     }
    // }, [searchText])

    // return(
    //     <div className="inline-block float-right">
    //         <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
    //         {filterParam != "" && <button onClick={() => removeAppliedFilter()} className="btn btn-xs mr-2 btn-active btn-ghost normal-case">{filterParam}<XMarkIcon className="w-4 ml-2"/></button>}
    //         <div className="dropdown dropdown-bottom dropdown-end">
    //             <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2"/>Filter</label>
    //             <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
    //                 {
    //                     locationFilters.map((l, k) => {
    //                         return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
    //                     })
    //                 }
    //                 <div className="divider mt-0 mb-0"></div>
    //                 <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // )



function Transactions(){

    const dispatch = useDispatch()


    const deleteCurrentLead = (index) => {
        dispatch(openModal({title : "Konfirmasi", bodyType : MODAL_BODY_TYPES_TRANSACTION.CONFIRMATION, 
        extraObject : { message : `Apakah kamu yakin ingin menghapus barang ini?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index}}))
    }


    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.location == params})
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }

    return(
        <>
            
            <TitleCard title="Data Barang" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Asset / Barang</th>
                        <th>Merek</th>
                        <th>Kategori</th>
                        <th>Jumlah</th>
                        <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            trans.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        {/* <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                            </div>
                                        </div> */}
                                    <div className="font-bold">{l.no}</div>
                                    </td>
                                    <td>{l.barang}</td>
                                    <td>{l.merek}</td>
                                    <td>{l.kategori}</td>
                                    <td>{l.jumlah}</td>
                                    <td>
                                    <Link to="/app/calendar"><button className="btn btn-square btn-ghost"><PencilSquareIcon className="w-5"/></button></Link>                                       
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5"/></button>
                                    </td>
                                    {/* <td>{moment(l.date).format("D MMM")}</td> */}
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


export default Transactions