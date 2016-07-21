import { SHOW_STREAMS, HIDE_STREAMS, SELECT_STREAM,
         SHOW_CHAT, HIDE_CHAT }
      from '../../constants/ActionTypes';

const initialState = {
  stream: {},
  displayChat: true,
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

    case SHOW_CHAT: {
      return {
        ...state,
        displayChat: true,
      };
    }

    case HIDE_CHAT: {
      return {
        ...state,
        displayChat: false,
      };
    }

    default: {
      return state;
    }
  }
}
