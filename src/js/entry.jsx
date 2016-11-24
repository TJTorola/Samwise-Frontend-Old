import React from 'react';
import { render } from 'react-dom';

import Root from 'components/base/root';

document.addEventListener("DOMContentLoaded", () => {
	render(<Root />, document.querySelector('#root'));
});