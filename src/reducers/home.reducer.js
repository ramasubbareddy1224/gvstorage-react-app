import { ActionTypes } from "../configurations/actiontypes";

const INITIAL_STATE = {emailUpdated: false, error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    
    case ActionTypes.Home.UPDATE_EMAIL:
    return { ...state, emailUpdated: false, error: null, loading: true};
  
    default:
    return state;
  }
}
