import actionTypes from "../actions/actionTypes";

export default function courseReducers(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;

    case actionTypes.GET_COURSE_SUCCESS:
      return action.course;

    case actionTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];

    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );

    case actionTypes.DELETE_COURSE_SUCCESS:
      return state.filter((course) => course.id !== action.course.id);

    default:
      return state;
  }
}
