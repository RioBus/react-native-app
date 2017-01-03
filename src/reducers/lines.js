import { DOWNLOAD_LINES, LOAD_LINES } from '../actions';

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {

    case LOAD_LINES:
    case DOWNLOAD_LINES:
      newState.all = action.payload;
      return newState;

    default: return newState;
  }
};
