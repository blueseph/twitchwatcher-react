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

export function hideStreams() {
  return { type: aTypes.HIDE_STREAMS };
}

export function selectStream(stream) {
  return { type: aTypes.SELECT_STREAM, stream };
}
