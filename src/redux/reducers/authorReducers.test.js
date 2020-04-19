import authorReducers from "./authorReducers";
import * as authorActions from "../actions/authorActions";

it("add author when CREATE_AUTHOR_SUCCESS passed", () => {
  const initialState = [{ name: "Adams" }, { name: "Dan" }];
  const newAuthor = { name: "Rey" };
  const action = authorActions.createAuthorSuccess(newAuthor);
  const newState = authorReducers(initialState, action);

  expect(newState.length).toBe(3);
  expect(newState[0].name).toEqual("Adams");
});

it("update passed author when UPDATE_AUTHOR_SUCCESS passed", () => {
  const initialState = [
    { id: 1, name: "Adams" },
    { id: 2, name: "Dan" },
  ];
  const updateAuthor = { id: 2, name: "Rey" };
  const action = authorActions.updateAuthorSuccess(updateAuthor);
  const newState = authorReducers(initialState, action);

  expect(newState.length).toBe(2);
  expect(newState[1]).toEqual(updateAuthor);
});
