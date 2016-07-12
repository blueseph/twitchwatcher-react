import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE }
      from '../../constants/RequestTypes';

const initialState = {
  isFetching: false,
  fetchError: false,
  data: [],
};

export default function games(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES_REQUEST: {
      return {
        ...state,
        data: [],
        isFetching: true,
        streamFetchError: false,
      };
    }

    case FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        data: action.games,
        isFetching: false,
        streamFetchError: false,
      };
    }

    case FETCH_GAMES_FAILURE: {
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
