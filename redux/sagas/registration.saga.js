import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function* registrationSaga() {
    yield takeLatest("REGISTER", registerUser);
}

function* registerUser(action) {
    try {
        yield axios.post(`${BASE_URL}/api/user/register`, action.payload);
        yield put({type: "LOGIN", payload: action.payload});
        // look into this put:
        // yield put({type: "SET_TO_LOGIN_MODE"});
    } catch (err) {
        console.log('Error registering user', err);
    }
}