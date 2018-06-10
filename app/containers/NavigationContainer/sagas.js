import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_TOPICS } from './constants';
import { requestTopicsSuccess, requestTopicsFailure} from './actions';

export function fetchTopicsFromServer(){
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSuccess(topics));
  } catch (e) {
    yield put(requestTopicsFailure(e.message));
  }
}

// Individual exports for testing
export function* fetchTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicSaga,
];
