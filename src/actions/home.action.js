import axios from 'axios';
import {Environment} from '../environments/environment';
import { ActionTypes } from '../configurations/actiontypes';



const ROOT_URL = Environment.Middleware_End_Point;

export function validateEmail(validateEmailToken) {
  //check if token from welcome email is valid, if so, update email as verified and login the user from response
  const request = axios.get(`${ROOT_URL}/validateEmail/${validateEmailToken}`);

  return {
    type: ActionTypes.Home.SIGNUP_USER,
    payload: request
  };
}

export function validateEmailSuccess(currentUser) {
  return {
    type: ActionTypes.Home.SIGNUP_USER_SUCCESS,
    payload: currentUser
  };
}

export function validateEmailFailure(error) {
  return {
    type: ActionTypes.Home.SIGNUP_USER,
    payload: error
  };
}
