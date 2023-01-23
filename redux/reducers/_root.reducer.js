import { combineReducers } from "redux";
import feedbackReducer from "./feedback.reducer";

const rootReducer = combineReducers({
  feedbackReducer,
});

export default rootReducer;
