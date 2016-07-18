import filter from './filter';
import * as types from '../../constants/FilterTypes';

describe('filter reducer', () => {
  it('should exist', () => {
    expect(filter).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      term: '',
    };

    expect(filter(undefined, {})).toEqual(defaultState);
  });

  it('should handle a FILTER action', () => {
    const action = {
      type: types.FILTER,
      term: 'League of Legends',
    };

    const expectedState = {
      term: 'League of Legends',
    };

    expect(filter({}, action)).toEqual(expectedState);
  });
});
