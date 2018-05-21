


/* -----------------    ACTIONS     ------------------ */

const SET_COLOR = 'SET_COLOR';

/* ------------   ACTION CREATORS     ------------------ */

export const setColor = color => ({ type: SET_COLOR, color: color });


/* ------------       REDUCERS     ------------------ */

export default function reducer(color = 'alpha', action) {
  switch (action.type) {

    case SET_COLOR:
      return action.color;

    default:
      return color;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

// export const fetchStories = () => dispatch => {
//   axios.get('/api/stories')
//     .then(res => dispatch(init(res.data)))
//     .catch(err => console.error('Fetching stories unsuccessful', err));
// };


