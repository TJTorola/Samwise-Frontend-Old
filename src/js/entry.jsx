import React from 'react';
import ReactDom from 'react-dom';

import Root from 'components/base/root';

document.addEventListener("DOMContentLoaded", () => {
	ReactDom.render(<Root />, document.querySelector('#root'));
});
