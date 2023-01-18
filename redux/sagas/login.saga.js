import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export default function* loginSaga() {
  yield takeLatest("LOGIN", loginUser);
  yield takeLatest("LOGOUT", logoutUser);
}

function* loginUser(action) {
  try {
    yield axios.post("http://10.39.20.4:5000/api/user/login", action.payload, config);
    yield put({ type: "FETCH_USER" });
  } catch (err) {
    console.log("Error with user login:", err);
    if (err.response.status === 401) {
        console.log("Username and password did not match.")
    } else {
        console.log("Check if server is running.")
    }
  }
}

function* logoutUser(action) {
  try {
    yield axios.post("http://10.39.20.4:5000/api/user/logout", config);
    yield put({ type: "CLEAR_USER" });
  } catch (err) {
    console.log("Error with user logout:", err);
  }
}
