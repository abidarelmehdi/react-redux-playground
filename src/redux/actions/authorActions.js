import * as authorApi from "../../api/authorApi";
import actionTypes from "./actionTypes";
import { startApiCall } from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return {
    type: actionTypes.LOAD_AUTHORS_SUCCESS,
    authors,
  };
}

export function createAuthorSuccess(author) {
  return {
    type: actionTypes.CREATE_AUTHOR_SUCCESS,
    author,
  };
}

export function updateAuthorSuccess(author) {
  return {
    type: actionTypes.UPDATE_AUTHOR_SUCCESS,
    author,
  };
}

export function deleteAuthorOptimistic(author) {
  return {
    type: actionTypes.DELETE_AUTHOR_OPTIMISTIC,
    author,
  };
}

// author thunks
export function loadAuthors() {
  return function (dispatch) {
    dispatch(startApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => dispatch(loadAuthorsSuccess(authors)))
      .catch((error) => {
        throw error;
      });
  };
}

export function saveAuthor(author) {
  return function (dispatch) {
    dispatch(startApiCall());
    return authorApi
      .saveAuthor(author)
      .then((saveAuthor) => {
        author.id
          ? dispatch(updateAuthorSuccess(saveAuthor))
          : dispatch(createAuthorSuccess(saveAuthor));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteAuthor(author) {
  return async function (dispatch) {
    dispatch(deleteAuthorOptimistic(author));
    try {
      return await authorApi.deleteAuthor(author.id);
    } catch (error) {
      throw error;
    }
  };
}
