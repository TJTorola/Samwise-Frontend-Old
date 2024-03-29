import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	expanded : state.dashboard.nav,
	logged   : state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);