import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const DOWNLOAD_LINES = 'DOWNLOAD_LINES';
export const LOAD_LINES = 'LOAD_LINES';
export const SELECT_LINE = 'SELECT_LINE';
export const UNSELECT_LINE = 'UNSELECT_LINE';
export const SELECTED_LINE = 'SELECTED_LINE';

const API_URL = 'http://rest.riob.us';
const DB_KEY = 'line';
const SELECTED_LINE_KEY = `${DB_KEY}:selected`;
const ALL_LINES_KEY = `${DB_KEY}:all`;

function downloadLines() {
    return axios.get(`${API_URL}/v3/itinerary`).catch(error => {
        console.warn(error);
        return [];
    });
}

export function loadLines() {
    return dispatch => {
        AsyncStorage.getItem(ALL_LINES_KEY).catch(error => {
            if (error) console.warn(error);
            return '[]';
        }).then(data => {
            const lines = JSON.parse(data) || [];
            if (lines.length > 0) return dispatch({ type: LOAD_LINES, payload: lines });
            downloadLines().then(obj => {
                const newLines = obj.data;
                if (newLines.length === 0) return dispatch({ type: LOAD_LINES, payload: [] });
                AsyncStorage.setItem(ALL_LINES_KEY, JSON.stringify(newLines), error => {
                    if (error) console.warn(error);
                    dispatch({ type: LOAD_LINES, payload: newLines });
                });
            });
        });
    };
}

export function selectLine(line) {
    return dispatch => {
        AsyncStorage.setItem(SELECTED_LINE_KEY, JSON.stringify(line), error => {
            if (error) console.warn(error);
            dispatch({ type: SELECT_LINE });
        });
    };
}

export function getSelectedLine() {
    return dispatch => {
        AsyncStorage.getItem(SELECTED_LINE_KEY, (error, response) => {
            if (error) console.warn(error);
            dispatch({ type: SELECTED_LINE, payload: JSON.parse(response) });
        });
    };
}

export function unselectLine() {
    return dispatch => {
        AsyncStorage.removeItem(SELECTED_LINE_KEY, error => {
            if (error) console.warn(error);
            dispatch({ type: UNSELECT_LINE });
        });
    };
}
