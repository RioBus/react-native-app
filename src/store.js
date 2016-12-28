import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

export default function configureStore(onCompletion) {
	const store = createStore(reducer, compose(applyMiddleware(thunk)));
	persistStore(store, { storage: AsyncStorage }, onCompletion);
	return store;
}
