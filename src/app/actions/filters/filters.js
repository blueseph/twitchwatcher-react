import * as types from '../../constants/FilterTypes';

export function filter(term) {
  return { type: types.FILTER, term };
}
