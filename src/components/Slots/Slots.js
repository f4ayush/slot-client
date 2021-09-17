import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../Form/Form'
export default function Slots() {
    // const [slots, setslots] = useState([9, 10, 11, 12, 1, 2, 3, 4, 5])
    const slots = useSelector(state => state.slots)
    const [slotDetails, setSlotDetails] = useState({})
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            {slots.map((slot, index) => {
                return <p key={index} className={slot.firstName !== "" ? "red" : "default"} onClick={() => { setShowModal(true); setSlotDetails(slot) }}>{slot.slot}</p>
            })}
            {showModal && <Form showModal={showModal} setShowModal={setShowModal} slotDetails={slotDetails} />}
        </div>
    )
}
