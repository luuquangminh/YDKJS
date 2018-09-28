export const LOAD_BOOK_DETAIL_REPOS = "boilerplate/App/LOAD_BOOK_DETAIL_REPOS";
export const LOAD_BOOK_DETAIL_REPOS_SUCCESS =
  "boilerplate/App/LOAD_BOOK_DETAIL_REPOS_SUCCESS";
export const LOAD_BOOK_DETAIL_REPOS_ERROR =
  "boilerplate/App/LOAD_BOOK_DETAIL_REPOS_ERROR";
export const LOAD_BOOK_DETAIL_REPOS_LOADING =
  "boilerplate/App/LOAD_BOOK_DETAIL_REPOS_LOADING";
export const LOAD_BOOK_DETAIL_REPOS_LOADED =
  "boilerplate/App/LOAD_BOOK_DETAIL_REPOS_LOADED";

const INITIAL_STATE = {
  isloading: false,
  isloaded: true,
  errors: [],
  book: null
};

export default function(state = INITIAL_STATE, { type, payload } = {}) {
  const actionFactory = {
    [LOAD_BOOK_DETAIL_REPOS]: {
      ...state,
      isloading: true,
      error: false,
      isloaded: false,
      book: payload
    },
    [LOAD_BOOK_DETAIL_REPOS_SUCCESS]: {
      ...state,
      isloading: false,
      isloaded: true,
      book: payload
    },
    [LOAD_BOOK_DETAIL_REPOS_ERROR]: {
      ...state,
      isloading: false,
      isloaded: true,
      book: null
    }
  };
  const detailReducer = actionFactory[type] || state;
  return detailReducer;
}
