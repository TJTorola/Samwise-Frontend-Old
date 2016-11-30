import React from 'react';

import { ConfirmedIcon } from 'components/modules';
let icon;

const FORM = [
	'center-fixed',
	'flex',
	'flex-column'
].join(' ');

const submit = e => {
	e.preventDefault();
	icon.work();

	console.log('here');
}

export default () => (
	<form className={ FORM } onSubmit={ submit }>
		<input type="text"/>
		<input type="password"/>

		<input type="submit" value="Submit"/>
		<ConfirmedIcon i="user" ref={ el => window.icon = el } />
	</form>
);
