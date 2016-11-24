import React from 'react';

import { Icon } from 'components/modules';

const HEADER_CLASSES = [
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

const ICON_CLASSES = [
	'f4',
	'pa3',
	'fl',
	'white'
].join(' ');

export default () => (
	<header className="bg-turquoise cf">
		<h1 className={ HEADER_CLASSES }><strong>Admin P</strong>4x4</h1>
		<Icon i="plus" className={ ICON_CLASSES } />
	</header>
);