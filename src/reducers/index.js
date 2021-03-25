import { combineReducers } from "redux";
import problemsReducer from "./problemsReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  problems: problemsReducer,
  search: searchReducer,
});

export default rootReducer;
