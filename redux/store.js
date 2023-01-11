import { createStore } from "redux";
import feedbackReducer from "./reducers/feedback.reducer";

const store = createStore(
    feedbackReducer,
);

export default store;