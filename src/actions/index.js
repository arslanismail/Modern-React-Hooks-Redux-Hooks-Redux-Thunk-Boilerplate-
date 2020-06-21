import axios from "axios";
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const fetchPostsRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};
export const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: posts,
  };
};
export const fetchPostsFaliure = (posts) => {
  return {
    type: "FETCH_USER_FALIURE",
    payload: posts,
  };
};

export const fetchPost = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const user = response.data;
        dispatch(fetchPostsSuccess(user));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchPostsFaliure);
      });
  };
};
