import { FETCH_ALL, SET_SLOT } from '../../assets/constants/actionTypes'

export default (slots = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case SET_SLOT:
            return slots.map((slot) => (slot._id === action.payload._id ? action.payload : slot));
        default:
            return slots;
    }
};

