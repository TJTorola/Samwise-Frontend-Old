import React from 'react';

import H1 from './h1';
import Menu from './menu';

const NAV = [
	'relative',
	'border-box',
	'bg-black-90',
	'w5',
	'h-100',
	'fast-in-slow-out',
	'flex',
	'flex-column'
].join(' ');

const nav = loggedIn => {
	if (loggedIn) {
		return NAV;
	} else {
		return `${ NAV } is-not-logged`;
	}
}

export default ({ shown, logged }) => (
	<nav className={ nav(logged) }>
		<H1 />
		<Menu />
	</nav>
);