import React from 'react';

import { WorkingButton } from 'components/modules';

const FORM = [
	'center-fixed',
	'flex',
	'flex-column'
].join(' ');

const submit = e => {
	e.preventDefault();
}

export default () => (
	<form className={ FORM } onSubmit={ submit }>
		<input type="text"/>
		<input type="password"/>

		<WorkingButton i="user">Submit</WorkingButton>
	</form>
);
