import {compose, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {ToDoReducer} from './ToDoReducer';
import rootSagas from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todoReducer: ToDoReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export default store;
