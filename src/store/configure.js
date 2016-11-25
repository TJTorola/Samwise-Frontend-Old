import { createStore } from 'redux';

import reducers from 'reducers/combine';
import middleware from './middleware';

const configureStore = (preloadedState = {}) => createStore(
	reducers,
	preloadedState,
	middleware
);

export default configureStore;