import { ADD_ALERT, REMOVE_ALERT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        msg: [...state.msg, action.payload.msg],
        style: action.payload.style
      };
    case REMOVE_ALERT:
      return {
        msg: [],
        style: null
      };
    default:
      return state;
  }
};
