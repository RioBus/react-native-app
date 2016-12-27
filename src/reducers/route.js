import { globalNav } from '../app';
import { PUSH_NEW_ROUTE, POP_ROUTE, POP_TO_ROUTE, REPLACE_ROUTE } from '../actions';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = { routes: [] };

export default function (state = initialState, action) {
  const routes = state.routes;

  switch (action.type) {

    case PUSH_NEW_ROUTE:
      globalNav.navigator.push({ id: action.route });
      return { routes: [...state.routes, action.route] };

    case REPLACE_ROUTE:
      globalNav.navigator.resetTo({ id: action.route });
      return { routes: [action.route] };

    case POP_ROUTE:
      globalNav.navigator.pop();
      routes.pop();
      return { routes };

    case POP_TO_ROUTE:
      globalNav.navigator.popToRoute({ id: action.route });
      while (routes.pop() !== action.route);
      return { routes: [...routes, action.route] };
    
    case REHYDRATE:
      const savedData = action.payload.route || state;
      return { ...savedData };

    default: return state;
  }
}