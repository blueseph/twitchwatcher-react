import * as types from '../../constants/RequestTypes';
import * as aTypes from '../../constants/ActionTypes';
import * as utils from '../../utils/TwitchUtils';

export function fetch(options = {}) {
  return async dispatch => {
    dispatch({ type: types.FETCH_STREAMS_REQUEST });
    const endpoint = await utils.twitchEndpointFinder(utils.endpoints.streams);
    try {
      const streams = await utils.getTwitchData(endpoint, options);
      dispatch({ type: types.FETCH_STREAMS_SUCCESS, data: streams.streams });
    } catch (err) {
      dispatch({ type: types.FETCH_STREAMS_FAILURE });
    }
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
  return async dispatch => {
    dispatch({ type: types.UPDATE_STREAMS_REQUEST });
    try {
      const endpoint = await utils.twitchEndpointFinder(utils.endpoints.search);
      const searchEndpoint = await utils.twitchEndpointFinder(utils.search.streams, endpoint);
      const streams = await utils.getTwitchData(searchEndpoint, { q: term, ...options });
      dispatch({ type: types.UPDATE_STREAMS_SUCCESS, data: streams.streams });
    } catch (err) {
      dispatch({ type: types.UPDATE_STREAMS_FAILURE });
    }
  };
}
