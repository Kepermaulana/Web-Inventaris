import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewTransaction } from "../transactionSlice"

const INITIAL_TRANSACTION_OBJ = {
    first_name : "",
    last_name : "",
    email : "",
    kategori : "",
    jumlah: ""
}

function AddTransactionModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [transactionObj, setTransactionObj] = useState(INITIAL_TRANSACTION_OBJ)


    const saveNewTransaction = () => {
        if(transactionObj.first_name.trim() === "")return setErrorMessage("First Name is required!")
        else if(transactionObj.email.trim() === "")return setErrorMessage("Email id is required!")
        else{
            let newTransactionObj = {
                "id": 7,
                "email": transactionObj.email,
                "first_name": transactionObj.first_name,
                "last_name": transactionObj.last_name,
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            }
            dispatch(addNewTransaction({newTransactionObj}))
            dispatch(showNotification({message : "New Lead Added!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setTransactionObj({...transactionObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={transactionObj.first_name} updateType="first_name" containerStyle="mt-4" labelTitle="ID Asset" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={transactionObj.last_name} updateType="last_name" containerStyle="mt-4" labelTitle="Asset" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={transactionObj.email} updateType="email" containerStyle="mt-4" labelTitle="Brand" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={transactionObj.kategori} updateType="email" containerStyle="mt-4" labelTitle="Kategori" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={transactionObj.jumlah} updateType="email" containerStyle="mt-4" labelTitle="Kategori" updateFormValue={updateFormValue}/>



            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewTransaction()}>Save</button>
            </div>
        </>
    )
}

export default AddTransactionModalBody