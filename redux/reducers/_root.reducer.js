import { combineReducers } from "redux";
import user from "./user.reducer";
import feedback from "./feedback.reducer";

const rootReducer = combineReducers({
    user,
    feedback,
});

export default rootReducer;