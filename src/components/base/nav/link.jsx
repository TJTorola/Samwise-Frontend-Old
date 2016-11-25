import React from 'react';

import { Icon } from 'components/modules';

const LI = [
	'white-40',
	'pv2',
	'ph3',
	'hover-white-60',
	'hover-bg-black',
	'pointer'
].join(' ');

const ICON = [
	'f4',
	'white-40',
	'pr3',
	'pv1',
	'v-mid'
].join(' ');

export default ({ info }) => (
	<li className={ LI }>
		<Icon i={ info.icon } className={ ICON } />
		{ info.title }
	</li>
);
