import { combineReducers } from "redux";
import books from "./containers/BookPage/reducer";
import details from "./containers/BookPage/components/Detail/reducer";

export default combineReducers({
  books,
  details
});
