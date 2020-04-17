import actionTypes from "../actions/actionTypes";

export default function courseReducers(state = [], action) {
  switch (action.type) {
    case actionTypes.SAVE_COURSE:
      return [...state, { ...action.course }];
    case actionTypes.LOAD_COUSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
