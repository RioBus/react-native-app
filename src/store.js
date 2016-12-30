import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducers';

export default function configureStore(onCompletion) {
	const store = createStore(reducer, compose(applyMiddleware(thunk)));
	persistStore(store, { storage: AsyncStorage }, onCompletion);
	return store;
}
