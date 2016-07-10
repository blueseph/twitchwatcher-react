import configureMockStore from 'redux-mock-store';
import * as types from '../../constants/RequestTypes';
import * as actions from './games';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  let streams;
  let preparedNock;

  beforeEach(() => {
    streams = { body: { streams: [{ name: 'Kripparrian' }] } };
    preparedNock = nock('https://api.twitch.tv/').get('kraken/games/top');

    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  // it('should do something', () => {
  //   const fakeAction = { type: 'FAKE_ACTION' };
  //
  //   store.dispatch(fakeAction);
  //   const actions = store.getActions();
  //
  //   expect(actions).toEqual([fakeAction]);
  // });
  //
  // it('should do async stuff', () => {
  //   function yeah() {
  //     return {
  //       type: 'FETCH_DATA_SUCCESS',
  //     };
  //   }
  //
  //   function fetch() {
  //     return dispatch =>
  //       fetch('/users.json').then(() => dispatch(yeah()));
  //   }
  //
  //   return store.dispatch(fetch())
  //     .then(() => {
  //       expect(store.getActions()[0]).toEqual(yeah());
  //     });
  // });

  // it('should create FETCH_STREAMS_SUCCESS when fetching streams is successful', () => {
  //   preparedNock.reply(200, streams);
  //
  //   console.log('yeah');
  //   console.log(actions.fetch());
  //   console.log(store.dispatch(actions.fetch()));
  //   console.log('yeah');
  //
  //   const expectedActions = [
  //     { type: types.FETCH_GAMES_REQUEST },
  //     { types: types.FETCH_GAMES_SUCCESS, streams },
  //   ];
  //
  //
  //   return store.dispatch(actions.fetch())
  //     .then(() => expect(store.getActions()).toEqual(expectedActions));
  // });

  // it('should create FETCH_GAMES_FAILURE when fetching streams is unsuccessful', () => {
  //   preparedNock.reply(500);
  //
  //   const expectedActions = [
  //     { type: types.FETCH_GAMES_REQUEST },
  //     { types: types.FETCH_GAMES_FAILURE, streams },
  //   ];
  //
  //   return store.dispatch(actions.fetch())
  //     .then(() => expect(store.getActions()).toEqual(expectedActions));
  // });
});
