import { combineReducers } from 'redux';
import HomeReducer from '../components/Home/module/reducer';

const rootReducer = () =>
  combineReducers({
    home: HomeReducer,
  });

export default rootReducer;
