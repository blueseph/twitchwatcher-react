import games from './games';
import * as types from '../constants/RequestTypes';

describe('games reducer', () => {
  it('should exist', () => {
    expect(games).toBeDefined();
  });

  it('should return a default state', () => {
    const defaultState = {
      isFetching: false,
      fetchError: false,
      data: [],
    };

    expect(games(undefined, {})).toEqual(defaultState);
  });

  it('should handle a FETCH_GAMES_REQUEST action', () => {
    const action = {
      type: types.FETCH_GAMES_REQUEST,
    };

    const expectedState = {
      data: [],
      isFetching: true,
      streamFetchError: false,
    };

    expect(games({}, action)).toEqual(expectedState);
  });

  it('should handle a FETCH_GAMES_SUCCESS action', () => {
    const fetchedGames = [{ top: 'Counter Strike: Global Offensive' }];

    const action = {
      type: types.FETCH_GAMES_SUCCESS,
      games: fetchedGames,
    };

    const expectedState = {
      isFetching: false,
      streamFetchError: false,
      data: fetchedGames,
    };

    expect(games({}, action)).toEqual(expectedState);
  });

  it('should handle a REMOVE_FILTER action', () => {
    const action = {
      type: types.FETCH_GAMES_FAILURE,
    };

    const expectedState = {
      data: [],
      isFetching: false,
      streamFetchError: true,
    };

    expect(games({}, action)).toEqual(expectedState);
  });
});
