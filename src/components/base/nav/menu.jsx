import React from 'react';

import { MENU } from 'settings/links';
import Link from './link';

const H2 = [
	'ma0',
	'bg-black',
	'white-60',
	'normal',
	'ttc',
	'pa3',
	'f6'
].join(' ');

const link = (info, idx) => (
	<Link key={ idx } info={ info } />
);

const subMenu = (catagory, idx) => (
	<div key={ idx }>
		<h2 className={ H2 }>
			{ catagory }
		</h2>
		<ul className="list pa0 ma0">
			{ MENU[catagory].map(link) }
		</ul>
	</div>
);

export default () => (
	<div>
		{ Object.keys(MENU).map(subMenu) }
	</div>
);
