import {combineReducers, createStore} from 'redux';
import calendarReducer from './calendarReducer';

const reducers = combineReducers({
   calendar: calendarReducer
});

let store = createStore(reducers);

export default store;