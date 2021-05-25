import ActionTypes from './index';

export const addToDo = title => ({
  type: ActionTypes.ADD_TODO,
  payload: title,
});

export const delToDo = index => ({
  type: ActionTypes.DEL_TODO,
  payload: index,
});

export const createToDo = (title, index) => ({
  type: ActionTypes.CREATE_TODO,
  payload: {
    title: title,
    index: index,
  },
});

export const checkToDo = index => ({
  type: ActionTypes.CHECK_TODO,
  payload: index,
});



export const findToDo = title => ({
  type: ActionTypes.FIND_TODO,
  payload: title,
});
