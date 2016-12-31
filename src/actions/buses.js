import axios from 'axios';

export const LOAD_BUSES = 'LOAD_BUSES';

const API_URL = 'http://rest.riob.us';

export function loadBuses(query) {
    if (!query) return { type: LOAD_BUSES, payload: [] };
    
    const request = axios.get(`${API_URL}/v3/search/${query}`).catch(error => {
        console.warn(error);
        return [];
    });
    return (dispatch) => {
        request.then(({ data }) => dispatch({ type: LOAD_BUSES, payload: data }));
    };
}
