


/* -----------------    ACTIONS     ------------------ */

const FETCH_POSTS = 'FETCH_POSTS';

/* ------------   ACTION CREATORS     ------------------ */

// export const setColor = color => ({ type: SET_COLOR, color: color });


/* ------------       REDUCERS     ------------------ */


const initialState = [
  {
    title: 'title area',
    date: '06-10-18',
    content: 'President Trump on Saturday expressed optimism about his summit with North Korean leader Kim Jong Un, but warned that the opportunity won’t happen again, calling it a “one-time shot Trump made his remarks in Charlevoix, Canada, at the end of the G-7 summit in a press conference as he prepared to depart for Singapore where he will meet with Kim on Tuesday to discuss issues such as North Korea denuclearization and an end to the Korean War.'
  },
  {
    title: 'title area',
    date: '06-10-18',
    content: 'President Trump on Saturday expressed optimism about his summit with North Korean leader Kim Jong Un, but warned that the opportunity won’t happen again, calling it a “one-time shot Trump made his remarks in Charlevoix, Canada, at the end of the G-7 summit in a press conference as he prepared to depart for Singapore where he will meet with Kim on Tuesday to discuss issues such as North Korea denuclearization and an end to the Korean War.'
  }

]



export default function reducer(state = initialState, action) {
  switch (action.type) {

    // case FETCH_POSTS:
    //   return action.color;

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

// export const fetchStories = () => dispatch => {
//   axios.get('/api/stories')
//     .then(res => dispatch(init(res.data)))
//     .catch(err => console.error('Fetching stories unsuccessful', err));
// };


