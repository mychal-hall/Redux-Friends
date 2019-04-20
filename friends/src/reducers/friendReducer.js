import * as actionTypes from "../actions";

const initialState = {
  friendSelected: {},
  showUpdate: false
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ONE_FRIEND:
      return { ...state, friendSelected: action.payload, showUpdate: false };
    case actionTypes.UPDATE_FRIEND_TOG:
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
};
