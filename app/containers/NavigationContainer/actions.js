/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCESS,
  REQUEST_TOPICS_FAILURE,
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

