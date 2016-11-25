import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	shown: state.dashboard.nav 
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);