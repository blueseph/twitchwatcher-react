import { FETCH_STREAMS_REQUEST, FETCH_STREAMS_FAILURE, FETCH_STREAMS_SUCCESS }
      from '../../constants/RequestTypes';
import { SHOW_STREAMS, HIDE_STREAMS } from '../../constants/ActionTypes';


const initialState = {
  isFetching: false,
  streamFetchError: true,
  visible: true,
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

    case SHOW_STREAMS: {
      return {
        ...state,
        visible: true,
      };
    }

    case HIDE_STREAMS: {
      return {
        ...state,
        visible: false,
      };
    }

    default: {
      return state;
    }
  }
}
