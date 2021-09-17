import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getSlots = () => API.get('/slots/getSlots');
export const setSlot = (userDetails) => API.post('/slots/setSlot', userDetails);