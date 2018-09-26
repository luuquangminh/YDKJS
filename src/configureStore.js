import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

const configureStore = (initialState) => {
    const store = createStore(
        createReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
    return store;
}

export default configureStore;