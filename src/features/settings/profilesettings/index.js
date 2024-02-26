import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Edit Profile" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nama Lengkap" defaultValue="Rifqi Maulana" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Username" defaultValue="rifqi123" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email" defaultValue="rifqi1234@gmail.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Foto" defaultValue="13328372832.png" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Password saat ini" defaultValue="" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Password Baru" defaultValue="IST" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Konfirmasi Password" defaultValue="California" updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings