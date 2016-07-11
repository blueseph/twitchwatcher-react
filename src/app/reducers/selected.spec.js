import selected from './selected';
import * as types from '../constants/ActionTypes';

describe('selected reducer', () => {
  it('should exist', () => {
    expect(selected).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      stream: {},
    };

    expect(selected(undefined, {})).toEqual(defaultState);
  });

  it('should handle a SHOW_STREAMS action', () => {
    const action = {
      type: types.SHOW_STREAMS,
    };

    const expectedState = {
      stream: {},
    };

    expect(selected(undefined, action)).toEqual(expectedState);
  });

  it('should handle a HIDE_STREAMS action', () => {
    const action = {
      type: types.HIDE_STREAMS,
    };

    const expectedState = {
      stream: {},
    };

    expect(selected(undefined, action)).toEqual(expectedState);
  });

  it('should handle a SELECT_STREAM action', () => {
    const stream = { channel: { name: 'ESL_ONE' } };

    const action = {
      type: types.SELECT_STREAM,
      stream,
    };

    const expectedState = {
      stream,
    };

    expect(selected({}, action)).toEqual(expectedState);
  });
});
