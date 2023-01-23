import feedbackSaga from "./feedback.saga";

export default function* rootSaga() {
  yield feedbackSaga();
}
