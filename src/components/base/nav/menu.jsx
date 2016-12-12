import React from 'react';

import { MENU } from 'settings/links';
import Link from './link';

const H2 = [
	'ma0',
	'bg-black',
	'white-90',
	'normal',
	'ttc',
	'pa3',
	'f6'
].join(' ');

const link = (info, idx) => (
	<Link key={ idx } info={ info } />
);

export default (catagory, idx) => (
	<div key={ idx }>
		<h2 className={ H2 }>
			{ catagory }
		</h2>
		<ul className="list pa0 ma0">
			{ MENU[catagory].map(link) }
		</ul>
	</div>
);
