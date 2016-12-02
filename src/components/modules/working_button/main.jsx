import React from 'react';

import { Button, Icon } from 'components/modules';

const ICON = [
	'h1',
	'gold',
	'mh1'
].join(' ');

const DIV = [
	'tc',
	'flex-fill'
].join(' ');

export default(props) => {
	const { i, children, ...buttonProps } = props;

	return (
		<Button { ...buttonProps }>
			<Icon i={ i } className={ ICON } />
			<div className={ DIV }>{ children }</div>
		</Button>
	);
}