import axios from 'axios';

export const FETCH_AD_OBJECTS = 'FETCH_AD_OBJECTS';
export const FETCH_AD_METRICS = 'FETCH_AD_METRICS';

// FAKE API INFORMATION
const ROOT_URL = 'http://hyfn.com/api';
const API_KEY  = '?key=hyfn8';

export function fetchAdObjects() {
  // comment this out because there is no actual endpoint
  // const request = axios.get(`${ROOT_URL}/ads${API_KEY}`)
  const request = {};

  return {
    type: FETCH_AD_OBJECTS,
    payload: request
  };
}

export function fetchAdMetrics() {
  // comment this out because there is no actual endpoint
  // const request = axios.get(`${ROOT_URL}/ads_metrics${API_KEY}`)
  const request = {};

  return {
    type: FETCH_AD_METRICS,
    payload: request
  };
}
