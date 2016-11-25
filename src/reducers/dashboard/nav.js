export default (state = true, action) => {
	switch (action.type) {
		case "SHOW_NAV":
			return true;
		case "HIDE_NAV":
			return false;
		default:
			return state;
	}
};
