import * as courseApi from "../../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return {
    type: actionTypes.SAVE_COURSE,
    course: course,
  };
  // courseApi.saveCourse(course).then((savedCourse) => {
  // });
}

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COUSES_SUCCESS,
    courses,
  };
}

// course thunks
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => dispatch(loadCoursesSuccess(courses)))
      .catch((error) => {
        throw error;
      });
  };
}
