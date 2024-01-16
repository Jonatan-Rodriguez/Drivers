import axios from 'axios';
import { ADD_DRIVER, ADD_TEAM, DRIVER_FOUND, FILTER_TEAM, FILTER_ORIGIN, ORDER, ORDER_DATE } from './action-types';

export const addDriver = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/drivers');

            dispatch({
                type: ADD_DRIVER,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const driverFound = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/drivers?name=${name}`);

            dispatch({
                type: DRIVER_FOUND,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const addTeam = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/teams`);

            dispatch({
                type: ADD_TEAM,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const filterCardsOrigin = (opcionOrigin) => {
    return { type: FILTER_ORIGIN, payload: opcionOrigin };
};

export const filterTeam = (team) => {
    return { type: FILTER_TEAM, payload: team };
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
};

export const orderCardsDate = (orderDate) => {
    return { type: ORDER_DATE, payload: orderDate };
};