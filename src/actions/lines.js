import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const DOWNLOAD_LINES = 'DOWNLOAD_LINES';
export const LOAD_LINES = 'LOAD_LINES';
export const SELECT_LINE = 'SELECT_LINE';
export const UNSELECT_LINE = 'UNSELECT_LINE';
export const SELECTED_LINE = 'SELECTED_LINE';

const API_URL = 'http://rest.riob.us';
const DB_KEY = 'line';

export function downloadLines() {
    const request = axios.get(`${API_URL}/v3/itinerary`).catch(error => {
        console.warn(error);
        return [];
    });
    return (dispatch) => {
        request.then(({ data }) => dispatch({ type: DOWNLOAD_LINES, payload: data }));
    };
}

export function loadLines() {
    return { type: LOAD_LINES, payload: [] };
}

export function selectLine(line) {
    return dispatch => {
        AsyncStorage.setItem(`${DB_KEY}:selected`, JSON.stringify(line), error => {
            if (error) console.warn(error);
            dispatch({ type: SELECT_LINE });
        });
    };
}

export function getSelectedLine() {
    return dispatch => {
        AsyncStorage.getItem(`${DB_KEY}:selected`, (error, response) => {
            if (error) console.warn(error);
            dispatch({ type: SELECTED_LINE, payload: JSON.parse(response) });
        });
    };
}

export function unselectLine() {
    return dispatch => {
        AsyncStorage.removeItem(`${DB_KEY}:selected`, error => {
            if (error) console.warn(error);
            dispatch({ type: UNSELECT_LINE });
        });
    };
}
