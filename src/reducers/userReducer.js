import ActionTypes from '../utils/constants';

const UserState = {
  userLoading: false,
  userData: {},
  isAutorisated: false,
  errorText: null,
};

export const UserReducer = (state = UserState, action) => {
  console.log('123123123123123123', action);

  switch (action.type) {
    case ActionTypes.ADD_USERS_INFO:
      return {
        ...state,
        userLoading: !state.userLoading,
        userData: action.data,
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        userLoading: !state.userLoading,
      };
    case ActionTypes.ISAUTORIZATED:
      return {
        ...state,
        isAutorisated: true,
        errorText: null,
      };
    case ActionTypes.LOG_OUT:
      return {
        state: UserState,
      };
    case ActionTypes.ERROR_TEXT:
      return {
        ...state,
        errorText: action.payload,
        userLoading: !state.userLoading,
      };
    default:
      return state;
  }
};
