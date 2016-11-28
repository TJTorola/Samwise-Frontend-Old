import React from 'react';

import { Icon } from 'components/modules';

const HEADER = [
	'bg-turquoise',
	'relative',
	'z-1',
	'cf',
	'fast-in-slow-out'
].join(' ');

const header = loggedIn => {
	if (loggedIn) {
		return HEADER;
	} else {
		return `${ HEADER } is-not-logged`;
	}
}

const H1 = [
	'bg-dark-turquoise',
	'white',
	'f4',
	'w5',
	'fw4',
	'pa3',
	'ma0',
	'border-box',
	'tc',
	'fl'
].join(' ');

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
		<h1 className={ H1 }><strong>Admin P</strong>4x4</h1>
		<Icon 
			i={ shown ? "minus" : "plus" } 
			className={ ICON } 
			onClick={ toggleNav } />
	</header>
);