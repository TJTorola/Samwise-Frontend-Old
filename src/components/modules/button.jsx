import React from 'react';

import { Icon } from 'components/modules';

const BUTTON = [
	'ba',
	'br3',
	'pa2',
	'ma2',
	'tc',
	'pointer',
	'flex',
	'b--gold',
	'gold',
	'hover-orange',
	'hover-b--orange'
].join(' ');

export default ({ children }) => (
	<div className={ BUTTON }>
		{ children }
	</div>
);
