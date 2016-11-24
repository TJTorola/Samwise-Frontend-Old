import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from 'components/base/root';

document.addEventListener("DOMContentLoaded", () => {
	render(<Root />, document.querySelector('#root'));
});
