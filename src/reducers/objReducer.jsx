import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";

const counterInitialState = {
  value: 0,
  diff: 1,
};

const counterObj = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff,
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff,
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff,
      });
    default:
      return state;
  }
};
export default counterObj;
