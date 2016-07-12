import { SHOW_STREAMS, HIDE_STREAMS, SELECT_STREAM }
      from '../../constants/ActionTypes';

const initialState = {
  stream: {},
};

export default function selected(state = initialState, action) {
  switch (action.type) {
    case SHOW_STREAMS: {
      return {
        ...state,
      };
    }

    case HIDE_STREAMS: {
      return {
        ...state,
      };
    }

    case SELECT_STREAM: {
      return {
        ...state,
        stream: action.stream,
      };
    }

    default: {
      return state;
    }
  }
}
