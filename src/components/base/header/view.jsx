import React from 'react';

import { Icon } from 'components/modules';

const HEADER = [
	'bg-turquoise',
	'relative',
	'fast-in-slow-out'
].join(' ');

const header = loggedIn => {
	if (loggedIn) {
		return HEADER;
	} else {
		return `${ HEADER } is-not-logged`;
	}
}

const ICON = [
	'f4',
	'pa3',
	'fl',
	'white',
	'pointer',
	'hover-bg-dark-turquoise'
].join(' ');

export default ({ shown, toggleNav, logged }) => (
	<header className={ header(logged) }>
		<Icon 
			i={ shown ? "minus" : "plus" } 
			className={ ICON } 
			onClick={ toggleNav } />
	</header>
);