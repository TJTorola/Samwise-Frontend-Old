export default (state = true, action) => {
	switch (action.type) {
		case "SHOW_NAV":
			return true;
		case "HIDE_NAV":
			return false;
		case "TOGGLE_NAV":
			return !state;
		default:
			return state;
	}
};
