import {
  combineReducers
} from 'redux';
import authReducer from './auth';
import screenshotReducer from './screenshot';

export default combineReducers({
  auth: authReducer,
  screenshot: screenshotReducer
})
