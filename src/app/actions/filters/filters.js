import * as types from '../../constants/FilterTypes';

export function filterName(term) {
  return { type: types.FILTER_BY_NAME, term };
}

export function filterGame(term) {
  return { type: types.FILTER_BY_GAME, term };
}

export function removeFilter() {
  return { type: types.REMOVE_FILTER };
}
