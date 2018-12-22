export const UPDATE_EMAIL = 'UPDATE_EMAIL';
const INITIAL_STATE = {emailUpdated: false, error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    
    case UPDATE_EMAIL:
    return { ...state, emailUpdated: false, error: null, loading: true};
  
    default:
    return state;
  }
}
