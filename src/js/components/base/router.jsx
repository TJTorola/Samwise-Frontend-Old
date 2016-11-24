import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app.jsx';
import Login from 'components/pages/login';

const checkLogin = () => {
	console.log("check login");
};

export default () => (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } onEnter={ checkLogin }>
		</Route>
	</Router>
);