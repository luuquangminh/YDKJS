import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk';
import createReducer from './reducers';

const configureStore = (initialState, history) => {
    const store = createStore(
        createReducer(),
        fromJS(initialState),
        applyMiddleware(thunk, logger)
    );
    return store;
}

export default configureStore;