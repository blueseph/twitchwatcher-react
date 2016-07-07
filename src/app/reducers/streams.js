import { FETCH_STREAMS_REQUEST, FETCH_STREAMS_FAILURE, FETCH_STREAMS_SUCCESS }
      from '../constants/RequestTypes';

const initialState = {
  isFetching: false,
  fetchError: false,
  data: [],
};

export default function streams(state = initialState, action) {
  switch (action.type) {
    case FETCH_STREAMS_REQUEST: {
      return {
        ...state,
        data: [],
        isFetching: true,
        streamFetchError: false,
      };
    }

    case FETCH_STREAMS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
        streamFetchError: false,
      };
    }

    case FETCH_STREAMS_FAILURE: {
      return {
        ...state,
        data: [],
        isFetching: false,
        streamFetchError: true,
      };
    }

    default: {
      return state;
    }
  }
}
