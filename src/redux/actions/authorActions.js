import * as authorApi from "../../api/authorApi";
import actionTypes from "./actionTypes";

export function loadAuthorsSuccess(authors) {
  return {
    type: actionTypes.LOAD_AUTHORS_SUCCESS,
    authors,
  };
}

// author thunks
export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => dispatch(loadAuthorsSuccess(authors)))
      .catch((error) => {
        throw error;
      });
  };
}
