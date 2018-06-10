
import { createStore, applyMiddleware, combineReducers } from 'redux';
import isAuthenticated from './auth';
import color from './color';
import posts from './posts'

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const mainReducer = combineReducers({ color, isAuthenticated, posts });


export default createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })))
  // composeWithDevTools(applyMiddleware(thunkMiddleware))
)
