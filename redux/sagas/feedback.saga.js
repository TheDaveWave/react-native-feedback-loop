import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

export default function* feedbackSaga() {
  yield takeLatest("FETCH_FEEDBACK", fetchFeedback);
  yield takeLatest("POST_FEEDBACK", postFeedback);
  yield takeLatest("DELETE_FEEDBACK", deleteFeedback);
}

// fetches feedback and stores it into redux.
function* fetchFeedback() {
  try {
    const response = yield axios.get("http://10.39.20.4:5000/api/feedback/user");
    yield put({ type: "SET_FEEDBACK", payload: response.data });
  } catch (err) {
    console.log("Error fetching feedback", err);
  }
}

// posts new feedback.
function* postFeedback(action) {
  try {
    yield axios.post("http://10.39.20.4:5000/api/feedback", action.payload);    
  } catch (err) {
    console.log("Error posting feedback", err);
  }
}

// deletes a feedback entry.
function* deleteFeedback(action) {
    try {
        yield axios.delete(`http://10.39.20.4:5000/api/feedback/${action.payload}`);
    } catch (err) {
        console.log("Error in deleting feedback", err);
    }
}
