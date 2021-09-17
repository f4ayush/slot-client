import { FETCH_ALL, SET_SLOT } from '../../assets/constants/actionTypes'
import * as api from '../../apis/index.js';

export const getSlots = () => async (dispatch) => {
    try {
        const { data } = await api.getSlots();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const setSlot = (userDetails) => async (dispatch) => {
    try {
        const { data } = await api.setSlot(userDetails);
        console.log(data)
        dispatch({ type: SET_SLOT, payload: userDetails });
    } catch (error) {
        console.log(error);
    }
};