import * as types from '../../constants/RequestTypes';
import * as aTypes from '../../constants/ActionTypes';
import * as utils from '../../utils/TwitchUtils';

export function fetch(options = {}) {
  return dispatch => {
    dispatch({ type: types.FETCH_STREAMS_REQUEST });
    utils.twitchEndpointFinder(utils.endpoints.streams)
      .then(endpoint => utils.getTwitchData(endpoint, options))
      .then(streams => dispatch({ type: types.FETCH_STREAMS_SUCCESS, data: streams.streams }))
      .catch(() => dispatch({ type: types.FETCH_STREAMS_FAILURE }));
  };
}

export function showStreams() {
  return { type: aTypes.SHOW_STREAMS };
}

export function hideStreams() {
  return { type: aTypes.HIDE_STREAMS };
}

export function hideChat() {
  return { type: aTypes.HIDE_CHAT };
}

export function showChat() {
  return { type: aTypes.SHOW_CHAT };
}

export function selectStream(stream) {
  return { type: aTypes.SELECT_STREAM, stream };
}

export function searchFor(term, options = {}) {
  return dispatch => {
    dispatch({ type: types.UPDATE_STREAMS_REQUEST });
    utils.twitchEndpointFinder(utils.endpoints.search)
      .then(endpoint => utils.twitchEndpointFinder(utils.search.streams, endpoint))
      .then(endpoint => utils.getTwitchData(endpoint, { q: term, ...options }))
      .then(streams => dispatch({ type: types.UPDATE_STREAMS_SUCCESS, data: streams.streams }))
      .catch(() => dispatch({ type: types.UPDATE_STREAMS_FAILURE }));
  };
}
