// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import SignUpReducer from './SignUpReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // signup:SignUpReducer
  // other reducers if any
});

export default rootReducer;
