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

const classes = given => given ? `${ given } ${ BUTTON }` : BUTTON;

export default (props) => {
	const { label, className, ...rest } = props;

	return (
		<div className={ classes(className) } { ...rest }>
			{ label }
		</div>
	);
};
