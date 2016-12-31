import { UNSELECT_LINE, SELECTED_LINE, DOWNLOAD_LINES, LOAD_LINES } from '../actions';

const initialState = {
  lines: [],
  selectedLine: {}
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {

    case LOAD_LINES:
    case DOWNLOAD_LINES:
      newState.lines = action.payload;
      return newState;

    case SELECTED_LINE:
      newState.selectedLine = action.payload;
      return newState;

    case UNSELECT_LINE:
      newState.selectedLine = initialState.selectedLine;
      return newState;

    default: return newState;
  }
};
