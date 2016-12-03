import React from 'react';

import { Icon } from 'components/modules';

const HEADER = [
	'bg-turquoise',
	'relative',
	'fast-in-slow-out',
	'flex'
].join(' ');

const header = loggedIn => {
	if (loggedIn) {
		return `${ HEADER } is-logged-in`;
	} else {
		return HEADER;
	}
}

const ICON = [
	'f4',
	'pa3',
	'white',
	'pointer',
	'hover-bg-dark-turquoise'
].join(' ');

export default ({ navShown, toggleNav, logged }) => (
	<header className={ header(logged) }>
		<Icon 
			i={ navShown ? "minus" : "plus" } 
			className={ ICON } 
			onClick={ toggleNav } />
	</header>
);