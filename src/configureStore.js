import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import appReducer from './reducers';

import api from './middleware/api'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, api)
);

const store = createStore(appReducer, enhancer);

export default store;