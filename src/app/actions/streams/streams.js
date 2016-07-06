import * as types from '../../constants/ActionTypes';
import * as utils from '../../utils/StreamUtils';

export function fetchStreams() {
  return dispatch => {
    dispatch({ type: types.FETCH_STREAMS_REQUEST });
    utils.twitchEndpointFinder(utils.endpoints.streams)
    .then(endpoint => utils.getTwitchData(endpoint))
    .then(streams => dispatch({ type: types.FETCH_STREAMS_SUCCESS, streams: streams.streams }))
    .catch(() => dispatch({ type: types.FETCH_STREAMS_FAILURE }));
  };
}

export function hideStreams() {
  return { type: types.HIDE_STREAMS };
}

export function selectStream(stream) {
  return { type: types.SELECT_STREAM, stream };
}

export function getStreams() {
  return { type: types.FETCH_STREAMS_REQUEST };
}
