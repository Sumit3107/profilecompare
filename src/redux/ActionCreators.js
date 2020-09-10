import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchUserInfo = (username) => (dispatch) => {
  return fetch(baseUrl + username)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((user) => dispatch(adduserinfo(user)))
    .catch((error) => dispatch(adduserFailed(error.message)));
};
export const adduserFailed = errmess => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
  });
export const adduserinfo = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});
