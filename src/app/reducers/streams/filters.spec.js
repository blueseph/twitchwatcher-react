import filters from './filters';
import * as types from '../../constants/FilterTypes';

describe('filter reducer', () => {
  it('should exist', () => {
    expect(filters).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      isFiltering: false,
      type: undefined,
      term: undefined,
    };

    expect(filters(undefined, {})).toEqual(defaultState);
  });

  it('should handle a FILTER_BY_GAME action', () => {
    const action = {
      type: types.FILTER_BY_GAME,
      term: 'League of Legends',
    };

    const expectedState = {
      isFiltering: true,
      type: types.FILTER_BY_GAME,
      term: 'League of Legends',
    };

    expect(filters({}, action)).toEqual(expectedState);
  });

  it('should handle a FILTER_BY_NAME action', () => {
    const action = {
      type: types.FILTER_BY_NAME,
      term: 'DOTA',
    };

    const expectedState = {
      isFiltering: true,
      type: types.FILTER_BY_NAME,
      term: 'DOTA',
    };

    expect(filters({}, action)).toEqual(expectedState);
  });

  it('should handle a REMOVE_FILTER action', () => {
    const action = {
      type: types.REMOVE_FILTER,
    };

    const expectedState = {
      isFiltering: false,
      type: undefined,
      term: undefined,
    };

    expect(filters({}, action)).toEqual(expectedState);
  });
});
