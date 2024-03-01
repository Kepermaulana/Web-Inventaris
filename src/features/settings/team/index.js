import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'


const TopSideButtons = () => {

    const dispatch = useDispatch()

    const addNewTeamMember = () => {
        dispatch(showNotification({message : "Add New Member clicked", status : 1}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => addNewTeamMember()}>Invite New</button>
        </div>
    )
}


const TEAM_MEMBERS = [
    {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@dashwind.com", role : "Owner", joinedOn : moment(new Date()).add(-5*1, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},
    {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", role : "Admin", joinedOn : moment(new Date()).add(-5*2, 'days').format("DD MMM YYYY"), lastActive : "15 min ago"},
    {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@dashwind.com", role : "Admin", joinedOn : moment(new Date()).add(-5*3, 'days').format("DD MMM YYYY"), lastActive : "20 hr ago"},
    {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", role : "Manager", joinedOn : moment(new Date()).add(-5*4, 'days').format("DD MMM YYYY"), lastActive : "1 hr ago"},
    {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", role : "Support", joinedOn : moment(new Date()).add(-5*5, 'days').format("DD MMM YYYY"), lastActive : "40 min ago"},
    {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@dashwind.com", role : "Support", joinedOn : moment(new Date()).add(-5*7, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},

]

function Team(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Barang berhasil Di Update", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Edit Data Barang" topMargin="mt-2">

                <div className="grid grid-cols-1">
                    <InputText labelTitle="ID Asset" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Asset" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Brand" type="text" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Kategori" type="text" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Jumlah Stok" type="text" defaultValue="" updateFormValue={updateFormValue}/>
                </div>
                <div className="mt-16"><button className="btn btn-primary float-left">Batal</button></div>
                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Perbarui</button></div>
            </TitleCard>
        </>
    )
}


export default Team