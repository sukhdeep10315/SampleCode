import {createStore,applyMiddleware,compose} from 'redux';
import Thunk from 'redux-thunk';
import reducer from '../reducers';
import initialState from './initialState';

const middleware=[Thunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
export default createStore(reducer, initialState,enhancer);