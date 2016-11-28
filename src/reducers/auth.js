export default (state = null, action) => {
	switch (action.type) {
		case "SET_AUTH":
			return action.token;
		case "CLEAR_AUTH":
			return null;
		default:
			return state;
	}
};
