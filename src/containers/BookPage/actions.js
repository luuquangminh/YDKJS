import {
  SET_SEARCH_TERM,
  LOAD_BOOK_REPOS_SUCCESS,
  SET_START_INDEX
} from "./reducer";

export const setSearchTerm = payload => ({
  type: SET_SEARCH_TERM,
  payload
});

export const loadBookReposSuccess = payload => ({
  type: LOAD_BOOK_REPOS_SUCCESS,
  payload
});

export const setStartIndex = payload => ({
  type: SET_START_INDEX,
  payload
});
