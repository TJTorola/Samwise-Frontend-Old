import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	shown: state.dashboard.nav,
	logged: state.auth
});

const mapDispatchToProps = dispatch => ({
	toggleNav: () => { dispatch({ type: "TOGGLE_NAV" }); }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);