import React from 'react';

import { MENU } from 'settings/links';
import Link from './link';

const NAV = [
	'relative',
	'border-box',
	'bg-black-90',
	'w5',
	'h-100',
	'fast-in-slow-out'
].join(' ');

const nav = loggedIn => {
	if (loggedIn) {
		return NAV;
	} else {
		return `${ NAV } is-not-logged`;
	}
}

const H2 = [
	'ma0',
	'bg-black',
	'white-60',
	'normal',
	'ttc',
	'pa3',
	'f6'
].join(' ');

const menu = () => (
	Object.keys(MENU).map((catagory, idx) => (
		<div key={ idx }>
			<h2 className={ H2 }>
				{ catagory }
			</h2>
			<ul className="list pa0 ma0">
				{ MENU[catagory].map(link) }
			</ul>
		</div>
	))
);

const link = (info, idx) => (
	<Link key={ idx } info={ info } />
);

export default ({ shown, logged }) => (
	<nav className={ nav(logged) }>
		{ menu() }
	</nav>
);