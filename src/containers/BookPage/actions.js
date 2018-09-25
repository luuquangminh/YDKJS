import {
    LOAD_BOOK_REPOS,
    LOAD_BOOK_REPOS_SUCCESS,
    LOAD_BOOK_REPOS_ERROR,
    LOAD_BOOK_REPOS_LOADING,
    LOAD_BOOK_REPOS_LOADED,
  } from './reducer';
export const loadBookRepos = payload => ({
    type: LOAD_BOOK_REPOS,
    payload,
  });

export const loadBookReposSuccess = payload => ({
    type: LOAD_BOOK_REPOS_SUCCESS,
    payload,
});

export const loadBookReposError = payload => ({
    type: LOAD_BOOK_REPOS_ERROR,
    payload,
  });

export const loadBookReposLoading = () => ({
    type: LOAD_BOOK_REPOS_LOADING,
  });

export const loadBookReposLoaded = () => ({
    type: LOAD_BOOK_REPOS_LOADED,
  });
