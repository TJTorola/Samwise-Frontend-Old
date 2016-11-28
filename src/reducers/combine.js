import { combineReducers } from 'redux';

import auth from './auth';
import dashboard from './dashboard/combine';

export default combineReducers({ 
	auth,
	dashboard
});