import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);