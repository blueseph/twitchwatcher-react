import { FILTER_BY_GAME, FILTER_BY_NAME, REMOVE_FILTER } from '../../constants/FilterTypes';

const initialState = {
  isFiltering: false,
  type: undefined,
  term: undefined,
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_GAME: {
      return {
        ...state,
        isFiltering: true,
        type: action.type,
        term: action.term,
      };
    }

    case FILTER_BY_NAME: {
      return {
        ...state,
        isFiltering: true,
        type: action.type,
        term: action.term,
      };
    }

    case REMOVE_FILTER: {
      return {
        ...state,
        isFiltering: false,
        type: undefined,
        term: undefined,
      };
    }

    default: {
      return state;
    }
  }
}
