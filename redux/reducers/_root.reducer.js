import { combineReducers } from "redux";
import user from "./user.reducer";
import feedbackReducer from "./feedback.reducer";

const rootReducer = combineReducers({
  user,
  feedbackReducer,
});

export default rootReducer;
