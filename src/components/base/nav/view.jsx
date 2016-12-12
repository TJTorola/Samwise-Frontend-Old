import React from 'react';

import { MENU } from 'settings/links';
import Header from './header';
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

const nav = ({ expanded, logged }) => {
	let classes = [];

	if (logged) { classes.push('is-logged-in'); }
	if (!expanded) { classes.push('is-retracted'); }

	return `${ NAV } ${ classes.join(' ') }`;
}

export default (props) => (
	<nav className={ nav(props) }>
		<Header />
		{ Object.keys(MENU).map(Menu) }
	</nav>
);
