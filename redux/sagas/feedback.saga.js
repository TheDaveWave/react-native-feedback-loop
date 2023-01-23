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
    let token = yield AsyncStorage.getItem("userToken");
    const config = {
      headers: {
        test: token,
      },
    };
    let userId = yield AsyncStorage.getItem("userInfo");
    userId = JSON.parse(userId);
    const response = yield axios.get(
      `${BASE_URL}/api/feedback/${userId.id}`,
      config
    );
    yield put({ type: "SET_FEEDBACK", payload: response.data });
  } catch (err) {
    console.log("Error fetching feedback", err);
  }
}

// posts new feedback.
function* postFeedback() {
  try {
    let token = yield AsyncStorage.getItem("userToken");
    const config = {
      headers: {
        test: token,
      },
    };
    let userId = yield AsyncStorage.getItem("userInfo");
    userId = JSON.parse(userId).id;
    let feedback = yield AsyncStorage.getItem("userFeedback");
    feedback = JSON.parse(feedback);
    feedback.userId = userId;
    yield axios.post(`${BASE_URL}/api/feedback`, feedback, config);
  } catch (err) {
    console.log("Error posting feedback", err);
  }
}

// deletes a feedback entry.
function* deleteFeedback(action) {
  try {
    let token = yield AsyncStorage.getItem("userToken");
    const config = {
      headers: {
        test: token,
      },
    };
    yield axios.delete(`${BASE_URL}/api/feedback/${action.payload}`, config);
  } catch (err) {
    console.log("Error in deleting feedback", err);
  }
}
