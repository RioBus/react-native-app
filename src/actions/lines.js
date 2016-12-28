import axios from 'axios';
import { API_URL } from '../const';

export const FIND_LINES = 'FIND_LINES';
export const DOWNLOAD_LINES = 'DOWNLOAD_LINES';
export const LOAD_LINES = 'LOAD_LINES';

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

export function findLines(query) {
    return { type: FIND_LINES, payload: [] };
}