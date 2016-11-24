import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from 'components/base/root';

document.addEventListener("DOMContentLoaded", () => {
	render(<AppContainer><Root /></AppContainer>, document.querySelector('#root'));
});

if (module.hot) {
	module.hot.accept('./components/base/root', () => {
		let Root = require('components/base/root').default;
		render(
			<AppContainer><Root /></AppContainer>,
			document.querySelector('#root')
		);
	});
}