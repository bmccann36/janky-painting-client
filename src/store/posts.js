
const axios = require('axios')

/* -----------------    ACTIONS     ------------------ */

const LOAD_POSTS = 'LOAD_POSTS';

/* ------------   ACTION CREATORS     ------------------ */

export const loadPosts = posts => ({ type: LOAD_POSTS, posts: posts });


/* ------------       REDUCERS     ------------------ */

const initialState = [
  {
    title: 'title will go here',
    date: 'date will go here',
    content: 'content will go here'
  },
  {
    title: 'title will go here',
    date: 'date will go here',
    content: 'content will go here'
  }
]

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_POSTS:
      return action.posts;

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

const route = ''/* TBD */

export const fetchPosts = () => dispatch => {
  axios.get(route)
    .then(res => {
      // console.log(res)
      dispatch(loadPosts(res.data))
    })
    .catch(err => console.error('Fetching posts unsuccessful', err));
};


