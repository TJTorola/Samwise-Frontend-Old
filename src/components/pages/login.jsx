import React from 'react';

import { WorkingIcon } from 'components/modules';
let icon; // Hoisting

const FORM = [
	'center-fixed',
	'flex',
	'flex-column'
].join(' ');

const submit = e => {
	e.preventDefault();
	

	console.log('here');
}

export default () => (
	<form className={ FORM } onSubmit={ submit }>
		<input type="text"/>
		<input type="password"/>

		<input type="submit" value="Submit"/>
		<WorkingIcon i="dollar" ref={ el => icon = el } />
	</form>
);
