export const SET_SEARCH_TERM = "boilerplate/App/SET_SEARCH_TERM";
export const LOAD_BOOK_REPOS_SUCCESS =
  "boilerplate/App/LOAD_BOOK_REPOS_SUCCESS";
export const LOAD_BOOK_REPOS_ERROR = "boilerplate/App/LOAD_BOOK_REPOS_ERROR";
export const LOAD_BOOK_REPOS_LOADING =
  "boilerplate/App/LOAD_BOOK_REPOS_LOADING";
export const LOAD_BOOK_REPOS_LOADED = "boilerplate/App/LOAD_BOOK_REPOS_LOADED";
export const SET_START_INDEX = "boilerplate/App/SET_START_INDEX";
// The initial state of the App
const INITIAL_STATE = {
  termSearch: "",
  maxIndex: 0,
  startIndex: 0,
  bookData: []
};
export default function(state = INITIAL_STATE, { type, payload = {} } = {}) {
  const actionFactory = {
    [SET_SEARCH_TERM]: {
      ...state,
      startIndex: 0,
      termSearch: payload
    },
    [LOAD_BOOK_REPOS_SUCCESS]: {
      ...state,
      bookData: payload.items,
      maxIndex: payload.totalItems
    },
    [SET_START_INDEX]: {
      ...state,
      startIndex: payload
    }
  };
  const bookReducer = actionFactory[type] || state;
  return bookReducer;
}
