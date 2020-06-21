import counterReducer from "./counter";
import isLoggedReducer from "./isLoged";
import { combineReducers } from "redux";
import fetchPost from "./posts";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  posts: fetchPost,
});

export default allReducers;
