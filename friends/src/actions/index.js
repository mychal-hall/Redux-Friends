import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const log = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post(`http://localhost:5000/api/login`, {
      username: "Lambda School",
      password: "i<3Lamb4"
    })
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch(error => {
      if (error.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAIL, payload: error.response.message });
    });
};

export const DATA_FETCH_START = "DATA_FETCH_START";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_FAIL = "DATA_FETCH_FAIL";

export const fetchFriends = () => dispatch => {
  dispatch({ type: DATA_FETCH_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      dispatch({
        type: DATA_FETCH_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: DATA_FETCH_FAIL, payload: error.response });
    });
};
