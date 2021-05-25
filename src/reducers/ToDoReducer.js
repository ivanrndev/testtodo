import ActionTypes from '../actions/index';

const DefaultState = {
  items: [],
  findVal: [],
};

export const ToDoReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        items: [...state.items, {title: action.payload, isActive: false}],
      };
    case ActionTypes.DEL_TODO:
      const newItems = [
        ...state.items.slice(0, action.payload),
        ...state.items.slice(action.payload + 1),
      ];
      return {
        ...state,
        items: newItems,
      };
    case ActionTypes.CREATE_TODO:
      const newArr = state.items.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
      return {
        ...state,
        items: newArr,
      };
    case ActionTypes.CHECK_TODO:
      const newArrayOfItems = state.items.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      });
      return {
        ...state,
        items: newArrayOfItems,
      };
    case ActionTypes.FIND_TODO:
      const toFindTitle = state.items.filter(item => item.title == action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
