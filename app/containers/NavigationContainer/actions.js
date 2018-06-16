/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCESS,
  REQUEST_TOPICS_FAILURE,
  SELECT_TOPIC
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSuccess(topics) {
  return {
    type: REQUEST_TOPICS_SUCCESS,
    topics,
  };
}

export function requestTopicsFailure(message) {
  return {
    type: REQUEST_TOPICS_FAILURE,
    message,
  };
}

export function selecttopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  };
}
