import {compose, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {ToDoReducer} from './ToDoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todoReducer: ToDoReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
