import actionTypes from "../actions/actionTypes";

export default function authorReducers(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case actionTypes.GET_AUTHOR_SUCCESS:
      return action.author;

    case actionTypes.CREATE_AUTHOR_SUCCESS:
      return [...state, { ...action.author }];

    case actionTypes.UPDATE_AUTHOR_SUCCESS:
      return state.map((author) =>
        author.id === action.author.id ? action.author : author
      );

    case actionTypes.DELETE_AUTHOR_OPTIMISTIC:
      return state.filter((author) => author.id !== action.author.id);

    default:
      return state;
  }
}
