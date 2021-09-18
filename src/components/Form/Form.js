import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSlot } from '../../redux/actions/slots'
import './Form.css'
export default function Form({ slotDetails, setShowModal }) {
    const [userDetails, setUserDetails] = useState({ _id: "", firstName: "", lastName: "", phoneNumber: "", slot: "" })
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(slotDetails)
        setUserDetails(slotDetails)
    }, [])

    const handleSave = () => {
        if (userDetails.firstName !== "" && userDetails.lastName !== "" && userDetails.phoneNumber !== "") {
            dispatch(setSlot(userDetails))
            setShowModal(false)
        } else {
            setError(true)
        }
    }

    const handleCancel = () => {
        setShowModal(false)
    }

    return (
        <div className="cover">
            <div className="form-container">
                <h5>{userDetails.slot} to {parseInt(userDetails.slot)+1}</h5>
                <div className="input-container">
                    <div className="input">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" value={userDetails.firstName} onChange={(e) => { setUserDetails({ ...userDetails, firstName: e.target.value }); setError(false) }} />
                    </div>
                
                    <div className="input">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" value={userDetails.lastName} onChange={(e) => { setUserDetails({ ...userDetails, lastName: e.target.value }); setError(false) }} />
                    </div>
                    <div className="input">
                        <label>Phone</label>
                        <input type="number" placeholder="Phone Number" value={userDetails.phoneNumber} onChange={(e) => { setUserDetails({ ...userDetails, phoneNumber: e.target.value }); setError(false) }} />
                    </div>
                    
                    {error && <p>Please fill all the fields</p>}
                </div>
                <div className="button-container">
                    <button className="save" onClick={handleSave}>Save</button>
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

