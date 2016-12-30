import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

export default () => createStore(Reducers, {}, applyMiddleware(ReduxThunk));
