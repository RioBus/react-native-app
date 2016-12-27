import { OPEN_DRAWER, CLOSE_DRAWER, ENABLE_DRAWER, DISABLE_DRAWER } from '../actions';

const initialState = {
  drawerState: 'closed',
  drawerDisabled: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case OPEN_DRAWER:
      return { ...state, drawerState: 'opened' };
    
    case CLOSE_DRAWER:
      return { ...state, drawerState: 'closed' };
    
    case ENABLE_DRAWER:
      return { ...state, drawerDisabled: false };

    case DISABLE_DRAWER:
      return { ...state, drawerDisabled: true };

    default: return state;
  }
};
