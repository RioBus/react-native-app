import { combineReducers } from 'redux';
import lines from './lines';
import buses from './buses';

export default combineReducers({
    lines,
    buses
});
