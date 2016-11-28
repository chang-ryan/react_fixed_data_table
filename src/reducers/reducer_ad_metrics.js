import { FETCH_AD_METRICS } from '../actions/index';

const INITIAL_STATE = { metrics: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_AD_METRICS:
      return { ...state, metrics: action.payload.data };
    default:
      return state;
  }
}
