import streams from './streams';
import * as types from '../constants/RequestTypes';

describe('streams reducer', () => {
  it('should exist', () => {
    expect(streams).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      isFetching: false,
      streamFetchError: true,
      data: [],
    };

    expect(streams(undefined, {})).toEqual(defaultState);
  });

  it('should handle a FETCH_STREAMS_REQUEST action', () => {
    const action = {
      type: types.FETCH_STREAMS_REQUEST,
    };

    const expectedState = {
      data: [],
      isFetching: true,
      streamFetchError: false,
    };

    expect(streams({}, action)).toEqual(expectedState);
  });

  it('should handle a FETCH_GAMES_SUCCESS action', () => {
    const fetchedStreams = [{ channel: { display_name: 'LIRIK' } }];

    const action = {
      type: types.FETCH_STREAMS_SUCCESS,
      data: fetchedStreams,
    };

    const expectedState = {
      isFetching: false,
      streamFetchError: false,
      data: fetchedStreams,
    };

    expect(streams(undefined, action)).toEqual(expectedState);
  });

  it('should handle a FETCH_STREAMS_FAILURE action', () => {
    const action = {
      type: types.FETCH_STREAMS_FAILURE,
    };

    const expectedState = {
      data: [],
      isFetching: false,
      streamFetchError: true,
    };

    expect(streams({}, action)).toEqual(expectedState);
  });
});
