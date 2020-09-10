import * as ActionTypes from "./ActionTypes";

export const User = (state = { errMess: null, user: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      var user = action.payload;
      state.user=state.user.concat(user)
      return { ...state, user: state.user.length > 0 ? [...state.user.sort((a,b) => b.followers - a.followers)] : state.user };
    case ActionTypes.USER_FAILED:
        return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};