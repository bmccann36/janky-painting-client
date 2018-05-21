
import { Auth } from "aws-amplify";

/* -----------------    ACTIONS     ------------------ */

const SET_AUTHENTICATED = 'SET_AUTHENTICATED';

/* ------------   ACTION CREATORS     ------------------ */

export const setAuthenticated = isAuthenticated => ({ type: SET_AUTHENTICATED, isAuthenticated: isAuthenticated });


/* ------------       REDUCERS     ------------------ */

export default function reducer(isAuthenticated = false, action) {
  switch (action.type) {

    case SET_AUTHENTICATED:
      return action.isAuthenticated;

    default:
      return isAuthenticated;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const signIn = (email, pwd) => dispatch => {

  Auth.signIn(email, pwd)
    .then(res => {
      // console.log(res)
      dispatch(setAuthenticated(true))
    })
    .catch(err => console.error('user login error', err));

};

export const signOut = () => dispatch => {

  Auth.signOut()
    .then(res => {
      console.log(res)
      dispatch(setAuthenticated(false))
    })
    .catch(err => console.error('user logout error', err));

};
