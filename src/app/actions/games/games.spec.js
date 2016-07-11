import * as actions from './games';
import * as types from '../../constants/RequestTypes';
import * as utils from '../../utils/TwitchUtils';
import { mockStore } from '../../utils/TestUtils';

describe('games actions', () => {
  it('should create a FETCH_GAMES_SUCCESS when fetching games is successful', done => {
    const games = { top: [{ game: { name: 'Overwatch', logo: { small: 'img.png' }, _id: 123 } }] };
    spyOn(utils, 'getGamesData').and.returnValue(Promise.resolve(games));

    const expectedGames = [{ name: 'Overwatch', logo: 'img.png', id: 123 }];

    const expectedActions = [
      { type: types.FETCH_GAMES_REQUEST },
      { type: types.FETCH_GAMES_SUCCESS, games: expectedGames },
    ];

    const store = mockStore({}, expectedActions, done, expect);
    store.dispatch(actions.fetch());
  });

  it('should create a FETCH_GAMES_FAILURE when fetching games fails', done => {
    spyOn(utils, 'getGamesData').and.returnValue(Promise.reject());

    const expectedActions = [
      { type: types.FETCH_GAMES_REQUEST },
      { type: types.FETCH_GAMES_FAILURE },
    ];

    const store = mockStore({}, expectedActions, done, expect);
    store.dispatch(actions.fetch());
  });
});
