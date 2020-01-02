import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PRICES,
    GET_PRICE,
    ADD_PRICE,
    DELETE_PRICE,
    PRICE_ERROR,
    PROPERTY_ERROR
} from './types';

// Get Property
export const getProperty = id => async dispatch => {
    try {
        const res = await axios.get(`/api/properties/${id}`);

        dispatch({
            type: GET_PROPERTY,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROPERTY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
// Get properties
export const getProperties = () => async dispatch => {
    try {
        const res = await axios.get('/api/properties');

        dispatch({
            type: GET_PROPERIES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROPERTY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
// Delete Properties
export const deleteProperties = id => async dispatch => {
    try {
        await axios.delete(`/api/properties/${id}`);

        dispatch({
            type: DELETE_PROPERTY,
            payload: id
        });

        dispatch(setAlert('Property Removed', 'success'));
    } catch (err) {
        dispatch({
            type: PROPERTY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add Property
export const addProperty = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('/api/properties', formData, config);

        dispatch({
            type: ADD_PROPERTY,
            payload: res.data
        });

        dispatch(setAlert('Property Created', 'success'));
    } catch (err) {
        dispatch({
            type: PROPERTY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};