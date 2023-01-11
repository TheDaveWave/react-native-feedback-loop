// create the default state object for the feedback reducer.
const feedbackInfo = {
  feeling: 3,
  support: 3,
  understanding: 3,
  comment: "None",
};

const feedbackReducer = (state = feedbackInfo, action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return { ...state, feeling: Number(action.payload) };
    case "ADD_SUPPORT":
      return { ...state, support: Number(action.payload) };
    case "ADD_UNDERSTANDING":
      return { ...state, understanding: Number(action.payload) };
    case "ADD_COMMENT":
      return { ...state, comment: action.payload };
    case "CLEAR_FEEDBACK":
      return feedbackInfo;
    default:
      return state;
  }
};

export default feedbackReducer;
