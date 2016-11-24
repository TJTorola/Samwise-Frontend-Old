import React from 'react';

import { MENU } from 'settings/links';

const HEADER_CLASSES = [
	'ma0',
	'bg-black',
	'white-60',
	'normal',
	'ttc',
	'pa3',
	'f6'
].join(' ');

const LI_CLASSES = [
	'white-40',
	'pv3',
	'ph4',
	'hover-white-60',
	'hover-bg-black',
	'pointer'
].join(' ');

const menu = () => (
	Object.keys(MENU).map((catagory, idx) => (
		<div key={ idx }>
			<h2 className={ HEADER_CLASSES }>
				{ catagory }
			</h2>
			<ul className="list pa0 ma0">
				{ MENU[catagory].map(link) }
			</ul>
		</div>
	))
);

const link = (info, idx) => (
	<li key={ idx } className={ LI_CLASSES }>{ info.title }</li>
);

export default () => (
	<nav className="bg-black-90 w5 h-100">
		{ menu() }
	</nav>
);