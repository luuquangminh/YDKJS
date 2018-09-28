import {
  LOAD_BOOK_DETAIL_REPOS,
  LOAD_BOOK_DETAIL_REPOS_SUCCESS,
  LOAD_BOOK_DETAIL_REPOS_ERROR,
  LOAD_BOOK_DETAIL_REPOS_LOADING,
  LOAD_BOOK_DETAIL_REPOS_LOADED
} from "./reducer";

export const loadBookDetailRepos = payload => ({
  type: LOAD_BOOK_DETAIL_REPOS,
  payload
});

export const loadBookDetailReposSuccess = payload => ({
  type: LOAD_BOOK_DETAIL_REPOS_SUCCESS,
  payload
});

export const loadBookDetailReposError = payload => ({
  type: LOAD_BOOK_DETAIL_REPOS_ERROR,
  payload
});

export const loadBookDetailReposLoading = () => ({
  type: LOAD_BOOK_DETAIL_REPOS_LOADED
});
