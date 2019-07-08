import * as actionTypes from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  gettingFriends: false,
  updatingFriend: false,
  addingFriend: false,
  deletingFriend: false,
  error: null,
  credentials: []
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_FRIENDS:
      return { ...state, gettingFriends: true };
    case actionTypes.GET_FRIENDS:
      return { ...state, friends: action.payload, gettingFriends: false };
    case actionTypes.UPDATING_FRIEND:
      return { ...state, updatingFriend: true };
    case actionTypes.UPDATE_FRIEND:
      return { ...state, friends: action.payload, updatingFriend: false };
    case actionTypes.DELETING_FRIEND:
      return { ...state, deletingFriend: true };
    case actionTypes.DELETE_FRIEND:
      return { ...state, friends: action.payload, deletingFriend: false };
    case actionTypes.ADDING_FRIEND:
      return { ...state, addingFriend: true };
    case actionTypes.ADD_FRIEND:
      return { ...state, friends: action.payload, addingFriend: true };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingFriends: false,
        addingFriend: false,
        deletingFriend: false,
        updatingFriend: false,
        error: action.payload
      };
    case actionTypes.LOGIN_START: {
      return { ...state, isLoggingIn: true };
    }
    case actionTypes.LOGIN_YES: {
      return { ...state, isLoggingIn: false, credentials: action.credentials };
    }
    case actionTypes.LOGIN_NO: {
      return { ...state, isLoggingIn: false };
    }

    default:
      return state;
  }
};
