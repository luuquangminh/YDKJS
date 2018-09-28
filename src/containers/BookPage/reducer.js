export const LOAD_BOOK_REPOS = "boilerplate/App/LOAD_BOOK_REPOS";
export const LOAD_BOOK_REPOS_SUCCESS =
  "boilerplate/App/LOAD_BOOK_REPOS_SUCCESS";
export const LOAD_BOOK_REPOS_ERROR = "boilerplate/App/LOAD_BOOK_REPOS_ERROR";
export const LOAD_BOOK_REPOS_LOADING =
  "boilerplate/App/LOAD_BOOK_REPOS_LOADING";
export const LOAD_BOOK_REPOS_LOADED = "boilerplate/App/LOAD_BOOK_REPOS_LOADED";
export const LOAD_BOOK_REPOS_PAGE = "boilerplate/App/LOAD_BOOK_REPOS_PAGE";
// The initial state of the App
const INITIAL_STATE = {
  isloading: false,
  isloaded: true,
  errors: [],
  termSearch: "",
  startIndex: 0,
  bookData: []
};
export default function(state = INITIAL_STATE, { type, payload } = {}) {
  const actionFactory = {
    [LOAD_BOOK_REPOS]: {
      ...state,
      isloading: true,
      error: false,
      isloaded: false,
      termSearch: payload
    },
    [LOAD_BOOK_REPOS_SUCCESS]: {
      ...state,
      isloading: false,
      isloaded: true,
      bookData: payload
    },
    [LOAD_BOOK_REPOS_ERROR]: {
      ...state,
      isloading: false,
      isloaded: true,
      errors: payload
    },
    [LOAD_BOOK_REPOS_PAGE]: {
      ...state,
      startIndex: payload
    }
  };
  const bookReducer = actionFactory[type] || state;
  return bookReducer;
}
