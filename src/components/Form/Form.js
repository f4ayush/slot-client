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
                <h5>{userDetails.slot}</h5>
                <div className="input-container">
                    <label>First Name &nbsp;
                        <input type="text" placeholder="First Name" value={userDetails.firstName} onChange={(e) => { setUserDetails({ ...userDetails, firstName: e.target.value }); setError(false) }} />
                    </label>
                    <label>Last Name &nbsp;
                        <input type="text" placeholder="Last Name" value={userDetails.lastName} onChange={(e) => { setUserDetails({ ...userDetails, lastName: e.target.value }); setError(false) }} />
                    </label>
                    <label>Phone Number &nbsp;
                        <input type="number" placeholder="Phone Number" value={userDetails.phoneNumber} onChange={(e) => { setUserDetails({ ...userDetails, phoneNumber: e.target.value }); setError(false) }} />
                    </label>
                    {error && <p>Please fill all the fields</p>}
                </div>
                <div className="button-container">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

