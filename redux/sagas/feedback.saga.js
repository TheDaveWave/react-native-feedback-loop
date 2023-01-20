import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../config";

export default function* feedbackSaga() {
  yield takeLatest("FETCH_FEEDBACK", fetchFeedback);
  yield takeLatest("POST_FEEDBACK", postFeedback);
  yield takeLatest("DELETE_FEEDBACK", deleteFeedback);
}

// fetches feedback and stores it into redux.
function* fetchFeedback() {
  try {
    const response = yield axios.get(`${BASE_URL}/api/feedback/user`);
    yield put({ type: "SET_FEEDBACK", payload: response.data });
  } catch (err) {
    console.log("Error fetching feedback", err);
  }
}

// posts new feedback.
function* postFeedback(action) {
  try {
    yield axios.post(`${BASE_URL}/api/feedback`, action.payload);    
  } catch (err) {
    console.log("Error posting feedback", err);
  }
}

// deletes a feedback entry.
function* deleteFeedback(action) {
    try {
        yield axios.delete(`${BASE_URL}/api/feedback/${action.payload}`);
    } catch (err) {
        console.log("Error in deleting feedback", err);
    }
}
