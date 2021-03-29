import { combineReducers } from "redux";
import problemsReducer from "./problemsReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  problems: problemsReducer,
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
