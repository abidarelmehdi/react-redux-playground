import * as authorActions from "./authorActions";
import actionTypes from "./actionTypes";
import { authors } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

describe("createAuthorSuccess", () => {
  it("create CREATE_AUTHOR_SOCCESS", () => {
    // arrange
    const author = authors[0];
    const expectedAction = {
      type: actionTypes.CREATE_AUTHOR_SUCCESS,
      author,
    };

    const action = authorActions.createAuthorSuccess(author);

    expect(action).toEqual(expectedAction);
  });
});

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
  afterEach(() => fetchMock.restore());
  describe("Load Authors thunk", () => {
    it("create START_API_CALL and LOAD_AUTHORS_SUCCESS when loading courses", () => {
      fetchMock.mock("*", {
        body: authors,
        headers: { "content-type": "application/json" },
      });
      const expectedActions = [
        { type: actionTypes.START_API_CALL },
        { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors },
      ];

      const store = mockStore({ authors: [] });
      return store.dispatch(authorActions.loadAuthors()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
