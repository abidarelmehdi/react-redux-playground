import * as courseApi from "../../api/courseApi";
import actionTypes from "./actionTypes";
import { startApiCall } from "./apiStatusActions";
export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses,
  };
}

export function getCourseSuccess(course) {
  return {
    type: actionTypes.GET_COURSE_SUCCESS,
    course,
  };
}
export function createCourseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course,
  };
}
export function updateCourseSuccess(course) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course,
  };
}

// course thunks
export function loadCourses() {
  return function (dispatch) {
    dispatch(startApiCall());
    return courseApi
      .getCourses()
      .then((courses) => dispatch(loadCoursesSuccess(courses)))
      .catch((error) => {
        throw error;
      });
  };
}

export function getCourse(slug) {
  return function (dispatch) {
    dispatch(startApiCall());
    return courseApi
      .getCourseBySlug(slug)
      .then((course) => dispatch(getCourseSuccess(course)))
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(startApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
