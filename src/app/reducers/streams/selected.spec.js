import selected from './selected';
import * as types from '../../constants/ActionTypes';

describe('selected reducer', () => {
  it('should exist', () => {
    expect(selected).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      stream: {},
      displayChat: true,
    };

    expect(selected(undefined, {})).toEqual(defaultState);
  });

  it('should handle a SHOW_STREAMS action', () => {
    const action = {
      type: types.SHOW_STREAMS,
    };

    const expectedState = {
      stream: {},
      displayChat: true,
    };

    expect(selected(undefined, action)).toEqual(expectedState);
  });

  it('should handle a HIDE_STREAMS action', () => {
    const action = {
      type: types.HIDE_STREAMS,
    };

    const expectedState = {
      stream: {},
      displayChat: true,
    };

    expect(selected(undefined, action)).toEqual(expectedState);
  });

  it('should handle a SHOW_CHAT action', () => {
    const intialState = {
      stream: {},
      displayChat: false,
    };

    const action = {
      type: types.SHOW_CHAT,
    };

    const expectedState = {
      stream: {},
      displayChat: true,
    };

    expect(selected(intialState, action)).toEqual(expectedState);
  });

  it('should handle a HIDE_CHAT action', () => {
    const action = {
      type: types.HIDE_CHAT,
    };

    const expectedState = {
      stream: {},
      displayChat: false,
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
      displayChat: true,
    };

    expect(selected(undefined, action)).toEqual(expectedState);
  });
});
