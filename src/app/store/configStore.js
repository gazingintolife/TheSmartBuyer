import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import orderReducer from '../reducers/orderReducer';
import userReducer from '../reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            orderReducer: orderReducer,
            userReducer: userReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

