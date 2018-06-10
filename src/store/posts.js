
const axios = require('axios')

/* -----------------    ACTIONS     ------------------ */

const LOAD_POSTS = 'LOAD_POSTS';

/* ------------   ACTION CREATORS     ------------------ */

export const loadPosts = posts => ({ type: LOAD_POSTS, posts: posts });


/* ------------       REDUCERS     ------------------ */

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_POSTS:
      return action.posts;

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */


const route = 'https://bgw0sh2hxj.execute-api.us-east-1.amazonaws.com/dev/posts'

export const fetchPosts = () => dispatch => {
  axios.get(route)
    .then(res => {
      // console.log(res)
      dispatch(loadPosts(res.data))
    })
    .catch(err => console.error('Fetching posts unsuccessful', err));
};


