import React from 'react';

import { Icon } from 'components/modules';

const LI = [
	'white-60',
	'pv2',
	'ph3',
	'hover-white-90',
	'hover-bg-black',
	'pointer',
	'flex',
	'items-center'
].join(' ');

const ICON = [
	'f4',
	'white-40',
	'pr3',
	'pv1'
].join(' ');

export default ({ info }) => (
	<li className={ LI }>
		<Icon i={ info.icon } className={ ICON } />
		<span>{ info.title }</span>
	</li>
);
