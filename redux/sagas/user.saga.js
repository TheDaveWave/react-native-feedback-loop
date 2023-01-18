import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export default function* userSaga() {
  yield takeLatest("FETCH_USER", fetchUser);
}

function* fetchUser() {
  try {
    const response = yield axios.get("/api/user", config);
    yield put({ type: "SET_USER", payload: response.data });
  } catch (err) {
    console.log("User get request failed", err);
  }
}
