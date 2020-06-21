const post = (state = null, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      console.log("user request");
      return state;
    case "FETCH_USER_SUCCESS":
      console.log("Fetch User Request");
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default post;
