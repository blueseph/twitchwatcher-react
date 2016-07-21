import { FETCH_STREAMS_REQUEST, FETCH_STREAMS_FAILURE, FETCH_STREAMS_SUCCESS,
         UPDATE_STREAMS_REQUEST, UPDATE_STREAMS_SUCCESS, UPDATE_STREAMS_FAILURE }
      from '../../constants/RequestTypes';
import { SHOW_STREAMS, HIDE_STREAMS } from '../../constants/ActionTypes';


const initialState = {
  isFetching: false,
  streamFetchError: true,
  visible: true,
  isUpdating: false,
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

    case UPDATE_STREAMS_REQUEST: {
      return {
        ...state,
        isUpdating: true,
        streamFetchError: false,
      };
    }

    case UPDATE_STREAMS_SUCCESS: {
      return {
        ...state,
        data: [...new Set([...state.data, ...action.data])],
        isUpdating: false,
        streamFetchError: false,
      };
    }

    case UPDATE_STREAMS_FAILURE: {
      return {
        ...state,
        isUpdating: false,
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
