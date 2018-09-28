import {
  LOAD_BOOK_REPOS,
  LOAD_BOOK_REPOS_SUCCESS,
  LOAD_BOOK_REPOS_ERROR,
  LOAD_BOOK_REPOS_LOADING,
  LOAD_BOOK_REPOS_LOADED,
  LOAD_BOOK_REPOS_PAGE
} from "./reducer";
import { getBookRepos } from "./api";

export const loadBookRepos = payload => {
  return async dispatch => {
    dispatch({
      type: LOAD_BOOK_REPOS,
      payload
    });
    const result = await getBookRepos(payload, 0);
    loadBookReposSuccess(result);
  };
};

export const loadBookReposSuccess = payload => ({
  type: LOAD_BOOK_REPOS_SUCCESS,
  payload
});

export const loadBookReposError = payload => ({
  type: LOAD_BOOK_REPOS_ERROR,
  payload
});

export const loadBookReposLoading = () => ({
  type: LOAD_BOOK_REPOS_LOADING
});

export const loadBookReposLoaded = () => ({
  type: LOAD_BOOK_REPOS_LOADED
});

export const loadBookReposPage = payload => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOAD_BOOK_REPOS_PAGE,
      payload
    });
    const { termSearch, startIndex } = getState().books;
    const result = await getBookRepos(termSearch, startIndex);
    loadBookReposSuccess(result);
  };
};
