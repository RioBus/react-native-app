import { FIND_LINES, DOWNLOAD_LINES, LOAD_LINES } from '../actions';

const initialState = {
  lines: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_LINES:
    case FIND_LINES:
    case DOWNLOAD_LINES:
      const newState = { ...state };
      newState.lines = action.payload;
      return newState;

    default: return state;
  }
}