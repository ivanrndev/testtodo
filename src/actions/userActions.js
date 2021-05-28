import ActionTypes from '../utils/constants';

export const loading = () => ({
  type: ActionTypes.LOADING,
});

export const autorizate = () => ({
  type: ActionTypes.ISAUTORIZATED,
});

// export const logOut = () => ({
//   type: ActionTypes.LOG_OUT,
// });

export const errorText = text => ({
  type: ActionTypes.ERROR_TEXT,
  payload: text,
});
