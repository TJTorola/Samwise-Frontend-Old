import React from 'react';

import Header from './header/container';
import Nav from './nav/container';
import Child from './child';

const MAIN = [
	'h-100',
	'flex',
	'bg-black-05',
	'avenir'
].join(' ');

const SECTION = [
	'flex-fill',
	'flex',
	'flex-column'
].join(' ');

export default ({ children }) => (
	<main className={ MAIN }>
		<Nav />

		<section className={ SECTION }>
			<Header />
			<Child page={ children } />
		</section>
	</main>
);