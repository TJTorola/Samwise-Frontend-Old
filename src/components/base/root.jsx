import React from 'react';
import { Provider } from 'react-redux';

import Router from './router/container';
import configureStore from 'store/configure';

const store = configureStore();

// TODO: Remove this
window.store = store;

export default () => (
	<Provider store={ store }>
		<Router />
	</Provider>
);