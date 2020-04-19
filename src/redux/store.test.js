import { createStore } from "redux";
import rootReducer from "./reducers";
import * as authorActions from "./actions/authorActions";

it("handle creating author", () => {
  const store = createStore(rootReducer);
  const author = { name: "Dan" };

  const action = authorActions.createAuthorSuccess(author);
  store.dispatch(action);

  const createdAuthor = store.getState().authors[0];

  expect(createdAuthor).toEqual(author);
});
