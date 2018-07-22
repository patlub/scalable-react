import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCESS } from './constants';
import { requestTopicsSuccess, requestTopicsFailure } from './actions';
import selectNavigationContainer from './selectors';

export function fetchTopicsFromServer() {
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

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

export function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopic) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCESS, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// All sagas to be loaded
export default [
  fetchTopicSaga,
  selectTopicSaga,
  selectDefaultTopicSaga
];
