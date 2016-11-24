import React from 'react';

const HEADER_CLASSES = [
	'bg-dark-blue',
	'white',
	'f4',
	'w5',
	'normal',
	'pa3',
	'ma0',
	'border-box',
	'tc'
].join(' ');

export default () => (
	<header className="avenir bg-blue">
		<h1 className={ HEADER_CLASSES }><strong>Admin P</strong>4x4</h1>
	</header>
);