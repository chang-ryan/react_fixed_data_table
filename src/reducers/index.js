import { combineReducers } from 'redux';
import AdObjectsReducer from './reducer_ad_objects';
import AdMetricsReducer from './reducer_ad_metrics';

const rootReducer = combineReducers({
  adObjects: AdObjectsReducer,
  adMetrics: AdMetricsReducer
});

export default rootReducer;
