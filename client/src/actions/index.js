import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

// post token to the backend server
export const handleToken = (token) => async dispatch => {
  console.log("hi");
  const res = await axios.post('/api/payments', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};