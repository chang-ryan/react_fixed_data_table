import { FETCH_AD_OBJECTS } from '../actions/index';

const INITIAL_STATE = { ads: [], metrics: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_AD_OBJECTS:
      return { ...state, ads: action.payload.data };
    default:
      return state;
  }
}
