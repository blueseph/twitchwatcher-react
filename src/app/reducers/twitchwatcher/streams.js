import { FETCH_STREAMS_REQUEST, FETCH_STREAMS_FAILURE, FETCH_STREAMS_SUCCESS }
      from '../../constants/ActionTypes';

const initialState = {
  isFetching: false,
  streamFetchError: false,
  streams: [],
};

export default function streams(state = initialState, action) {
  switch (action.type) {
    case FETCH_STREAMS_REQUEST: {
      return {
        ...state,
        streams: [],
        isFetching: true,
        streamFetchError: false,
      };
    }

    case FETCH_STREAMS_SUCCESS: {
      return {
        ...state,
        streams: action.streams,
        isFetching: false,
        streamFetchError: false,
      };
    }

    case FETCH_STREAMS_FAILURE: {
      return {
        ...state,
        streams: [],
        isFetching: false,
        streamFetchError: true,
      };
    }

    default: {
      return state;
    }
  }
}
