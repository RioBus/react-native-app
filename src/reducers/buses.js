import { LOAD_BUSES } from '../actions';

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {

    case LOAD_BUSES:
      newState.all = action.payload;
      return newState;

    default: return newState;
  }
};
