import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

export default function* registrationSaga() {
    yield takeLatest("REGISTER", registerUser);
}

function* registerUser(action) {
    try {
        yield axios.post("/api/user/register", action.payload);
    } catch (err) {
        console.log('Error registering user', err);
    }
}