import { OPEN_DRAWER, CLOSE_DRAWER, ENABLE_DRAWER, DISABLE_DRAWER } from '../actions';

const initialState = {
  drawerState: 'closed',
  drawerDisabled: true
};

export default (state = initialState, action) => {
  // console.log(action, "UGH(W&G(GD(&GD(G&");
  if (action.type === OPEN_DRAWER) {
    return {
      ...state,
      drawerState: 'opened'
    };
  }

  if (action.type === CLOSE_DRAWER) {
    return {
      ...state,
      drawerState: 'closed'
    };
  }

  if (action.type === ENABLE_DRAWER) {
    // console.log("enable drawer (*&*)*)()");
    return {
      ...state,
      drawerDisabled: false
    };
  }

  if (action.type === DISABLE_DRAWER) {
    return {
      ...state,
      drawerDisabled: true
    };
  }

  return state;
}