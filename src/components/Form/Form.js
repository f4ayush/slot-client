import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSlot } from '../../redux/actions/slots'

export default function Form({ slotDetails, setShowModal }) {
    const [userDetails, setUserDetails] = useState({ _id: "", firstName: "", lastName: "", phoneNumber: "", slot: "" })
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(slotDetails)
        setUserDetails(slotDetails)
    }, [])

    const handleSave = () => {
        dispatch(setSlot(userDetails))
        setShowModal(false)
    }

    const handleCancel = () => {
        setShowModal(false)
    }

    return (
        <div>
            <h5>{userDetails.slot}</h5>
            <input type="text" placeholder="First Name" value={userDetails.firstName} onChange={(e) => { setUserDetails({ ...userDetails, firstName: e.target.value }) }} />
            <input type="text" placeholder="Last Name" value={userDetails.lastName} onChange={(e) => { setUserDetails({ ...userDetails, lastName: e.target.value }) }} />
            <input type="number" placeholder="Phone Number" value={userDetails.phoneNumber} onChange={(e) => { setUserDetails({ ...userDetails, phoneNumber: e.target.value }) }} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

