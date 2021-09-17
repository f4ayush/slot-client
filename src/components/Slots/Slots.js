import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Form from '../Form/Form'
import './Slots.css'
export default function Slots() {
    // const [slots, setslots] = useState([9, 10, 11, 12, 1, 2, 3, 4, 5])
    const slots = useSelector(state => state.slots)
    const [slotDetails, setSlotDetails] = useState({})
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="slot-container">
                {slots.map((slot, index) => {
                    return <button key={index} className={slot.firstName !== "" ? "red" : "default"} onClick={() => { setShowModal(true); setSlotDetails(slot) }}>{slot.slot} to {parseInt(slot.slot) + 1}</button>
                })}
            </div>
            {showModal && <Form showModal={showModal} setShowModal={setShowModal} slotDetails={slotDetails} />}
        </>
    )
}
