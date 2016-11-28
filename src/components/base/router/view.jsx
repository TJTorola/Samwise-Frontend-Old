import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'components/base/app';

import Login from 'components/pages/login';

const checkLogin = ({ auth }) => {
	console.log("check login");
};

export default ({ auth }) => (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } onEnter={ checkLogin }>
			<Route path="login" component={ Login } />
		</Route>
	</Router>
);