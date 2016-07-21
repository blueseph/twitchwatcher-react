import streams from './streams';
import * as types from '../../constants/RequestTypes';
import * as aTypes from '../../constants/ActionTypes';

describe('streams reducer', () => {
  it('should exist', () => {
    expect(streams).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      isFetching: false,
      isUpdating: false,
      streamFetchError: true,
      visible: true,
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
      isUpdating: false,
      streamFetchError: false,
      visible: true,
    };

    expect(streams(undefined, action)).toEqual(expectedState);
  });

  it('should handle a FETCH_GAMES_SUCCESS action', () => {
    const fetchedStreams = [{ channel: { display_name: 'LIRIK' } }];

    const action = {
      type: types.FETCH_STREAMS_SUCCESS,
      data: fetchedStreams,
    };

    const expectedState = {
      isFetching: false,
      isUpdating: false,
      streamFetchError: false,
      data: fetchedStreams,
      visible: true,
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
      isUpdating: false,
      streamFetchError: true,
      visible: true,
    };

    expect(streams(undefined, action)).toEqual(expectedState);
  });

  it('should handle a UPDATE_STREAMS_REQUEST action', () => {
    const action = {
      type: types.UPDATE_STREAMS_REQUEST,
    };

    const expectedState = {
      data: [],
      isUpdating: true,
      streamFetchError: false,
      isFetching: false,
      visible: true,
    };

    expect(streams(undefined, action)).toEqual(expectedState);
  });

  it('should handle a UPDATE_STREAMS_SUCCESS action', () => {
    const previousStreams = [{ channel: { display_name: 'Sodapoppin' } }];
    const fetchedStreams = [{ channel: { display_name: 'LIRIK' } }];

    const action = {
      type: types.UPDATE_STREAMS_SUCCESS,
      data: fetchedStreams,
    };

    const previousState = {
      data: previousStreams,
      isFetching: false,
      isUpdating: false,
      streamFetchError: false,
      visible: true,
    };

    const expectedState = {
      isFetching: false,
      isUpdating: false,
      streamFetchError: false,
      data: [...previousStreams, ...fetchedStreams],
      visible: true,
    };

    expect(streams(previousState, action)).toEqual(expectedState);
  });

  it('should handle a UPDATE_STREAMS_FAILURE action', () => {
    const action = {
      type: types.UPDATE_STREAMS_FAILURE,
    };
    const expectedState = {
      data: [],
      isFetching: false,
      isUpdating: false,
      streamFetchError: true,
      visible: true,
    };

    expect(streams(undefined, action)).toEqual(expectedState);
  });


  it('should handle a HIDE_STREAMS action', () => {
    const action = {
      type: aTypes.HIDE_STREAMS,
    };

    const initialState = {
      data: [],
      isFetching: false,
      streamFetchError: true,
      visible: true,
    };

    const expectedState = {
      data: [],
      isFetching: false,
      streamFetchError: true,
      visible: false,
    };

    expect(streams(initialState, action)).toEqual(expectedState);
  });

  it('should handle a SHOW_STREAMS action', () => {
    const action = {
      type: aTypes.SHOW_STREAMS,
    };

    const initialState = {
      data: [],
      isFetching: false,
      streamFetchError: true,
      visible: false,
    };

    const expectedState = {
      data: [],
      isFetching: false,
      streamFetchError: true,
      visible: true,
    };

    expect(streams(initialState, action)).toEqual(expectedState);
  });
});
