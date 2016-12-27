import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import promise from './promise';

export default function configureStore(onCompletion) {
	const enhancer = compose(
		applyMiddleware(thunk, promise)
	);

	const store = createStore(reducer, enhancer);
	persistStore(store, { storage: AsyncStorage }, onCompletion);
	return store;
}
