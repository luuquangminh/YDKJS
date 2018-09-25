

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import books from './containers/BookPage/reducer';

export default combineReducers({
  books
});