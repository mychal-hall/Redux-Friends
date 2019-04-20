import axios from "axios";

export const ERROR = "ERROR";
export const GET_FRIENDS = "GET_FRIENDS";
export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const UPDATE_FRIEND_TOG = "UPDATE_FRIEND_TOG";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const ONE_FRIEND = "ONE_FRIEND";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_YES = "LOGIN_YES";
export const LOGIN_NO = "LOGIN_NO";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post("http://localhost:5000/api/login", {
      username: "Lambda School",
      password: "i<3Lambd4"
    })
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({
        type: LOGIN_YES,
        payload: response.data,
        credentials: credentials
      });
    })
    .catch(error => {
      if (error.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_NO, payload: error.response.message });
    });
};

export const getFriends = () => {
  const friends = axios.get("http://localhost:5000/api/friends/get");
  return dispatch => {
    friends
      .then(response => {
        dispatch({ type: GET_FRIENDS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteFriend = id => {
  const deletedFriend = axios.delete(
    "http://localhost:5000/api/friends/delete",
    {
      data: { id }
    }
  );
  return dispatch => {
    dispatch({ type: DELETING_FRIEND });
    deletedFriend
      .then(({ data }) => {
        dispatch({ type: DELETE_FRIEND, payload: data });
        dispatch({ type: ONE_FRIEND, payload: {} });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addFriend = friend => {
  const newFriend = axios.post(
    "http://localhost:5000/api/friends/create",
    friend
  );
  return dispatch => {
    dispatch({ type: ADDING_FRIEND });
    newFriend
      .then(({ data }) => {
        dispatch({ type: ADD_FRIEND, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const showUpdate = () => {
  return {
    type: UPDATE_FRIEND_TOG
  };
};

export const updateOneFriend = friend => {
  return {
    type: ONE_FRIEND,
    payload: friend
  };
};
