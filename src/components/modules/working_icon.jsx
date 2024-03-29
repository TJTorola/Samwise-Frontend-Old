import React from 'react';

import { Icon } from 'components/modules';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = { working: false };
		this.props = props;
		this.work  = this.work.bind(this);
		this.stop  = this.stop.bind(this);
	}

	i() {
		const { working } = this.state;
		return working ? 'cog' : this.props.i;
	}

	className() {
		const { working } = this.state,
		      { className } = this.props,
		      classes = className || '';

		return working ? `${ classes } spinning` : classes;
	}

	work() {
		this.setState({ working: true });
	}

	stop() {
		this.setState({ working: false });
	}

	render() {
		const classes = this.className.bind(this)(),
		      icon    = this.i.bind(this)();

		return <Icon i={ icon } className={ classes } />;
	}
}