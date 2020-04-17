import { combineReducers } from "redux";
import courses from "./courseReducers";
import authors from "./authorReducers";
import apiStatus from "./apiStatusReducers";

const rootReducer = combineReducers({
  courses,
  authors,
  apiStatus,
});

export default rootReducer;
