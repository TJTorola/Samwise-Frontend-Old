import React from 'react';

import { WorkingIcon } from 'components/modules';

const TIMEOUT = 2000;

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = { i: null };
		this.props = props;
	}

	i() {
		return this.state.i || this.props.i;
	}

	work() {
		this.iconEl.work();
	}

	finished() {
		this.iconEl.stop();

		const setState = this.setState.bind(this);
		setState({ i: 'check' });

		setTimeout(() => {
			setState({ i: null })
		}, this.props.timeout || TIMEOUT);
	}

	failed() {
		this.iconEl.stop();

		const setState = this.setState.bind(this);
		setState({ i: 'times' });

		setTimeout(() => {
			setState({ i: null })
		}, this.props.timeout || TIMEOUT);
	}

	render() {
		const icon = this.i.bind(this)();

		return <WorkingIcon 
			className={ this.props.className }
			i={ icon }
			ref={ el => this.iconEl = el } />;
	}
}