import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

function warn(error) {
  console.warn(error.message || error);
  throw error; // To let the caller handle the rejection
}

function resolvePromise(state) {
  return next => action => {
    const key = Object.keys(action).find(k => typeof k.then === 'function');
    if (key.length) return Promise.resolve(action[key]).then(next, warn);
    return next(action);
  };
}

export default function configureStore(onCompletion) {
	const enhancer = compose(
		applyMiddleware(thunk, resolvePromise)
	);

	const store = createStore(reducer, enhancer);
	persistStore(store, { storage: AsyncStorage }, onCompletion);
	return store;
}
