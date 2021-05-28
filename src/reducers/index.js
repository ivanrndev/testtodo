import {compose, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {ToDoReducer} from './ToDoReducer';
import {rootSagas} from '../sagas';
import {UserReducer} from './userReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todoReducer: ToDoReducer,
  UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export default store;
