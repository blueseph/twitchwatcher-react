import { FILTER } from '../../constants/FilterTypes';

const initialState = {
  term: '',
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case FILTER: {
      return {
        ...state,
        term: action.term,
      };
    }

    default: {
      return state;
    }
  }
}
