import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import lines from './lines';

export default combineReducers({
  drawer,
  route,
  lines
});