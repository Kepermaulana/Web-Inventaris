import { useState } from 'react'
import CalendarView from '../../components/CalendarView'
import moment from 'moment'
import { CALENDAR_INITIAL_EVENTS } from '../../utils/dummyData'
import { useDispatch } from 'react-redux'
import { openRightDrawer } from '../common/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../../utils/globalConstantUtil'
import { showNotification } from '../common/headerSlice'
import InputText from '../../components/Input/InputText'
import TitleCard from "../../components/Cards/TitleCard"




const INITIAL_EVENTS = CALENDAR_INITIAL_EVENTS

function Calendar(){

    const dispatch = useDispatch()

    const [events, setEvents] = useState(INITIAL_EVENTS)

    // Add your own Add Event handler, like opening modal or random event addition
    // Format - {title :"", theme: "", startTime : "", endTime : ""}, typescript version comming soon :)
    const addNewEvent = (date) => {
        let randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)]
        let newEventObj = {title : randomEvent.title, theme : randomEvent.theme, startTime : moment(date).startOf('day'), endTime : moment(date).endOf('day')}
        setEvents([...events, newEventObj])
        dispatch(showNotification({message : "New Event Added!", status : 1}))
    }

    // Open all events of current day in sidebar 
    const openDayDetail = ({filteredEvents, title}) => {
        dispatch(openRightDrawer({header : title, bodyType : RIGHT_DRAWER_TYPES.CALENDAR_EVENTS, extraObject : {filteredEvents}}))
    }


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



           {/* <CalendarView 
                calendarEvents={events}
                addNewEvent={addNewEvent}
                openDayDetail={openDayDetail}
           /> */}
        </>
    )
}

export default Calendar