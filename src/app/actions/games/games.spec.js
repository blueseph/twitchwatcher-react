// import configureMockStore from 'redux-mock-store';
// import * as types from '../../constants/RequestTypes';
// import * as utils from '../../utils/TwitchUtils';
// import * as actions from './games';
// import thunk from 'redux-thunk';
// import nock from 'nock';
//
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
//
// describe('async actions', () => {
//   let store;
//   let streams;
//   let twitchNock;
//
//   beforeEach(() => {
//     streams = { body: { streams: [{ name: 'Kripparrian' }] } };
//     twitchNock = nock('https://api.twitch.tv/').get('kraken/games/top/');
//
//     store = mockStore({ streams: [] });
//   });
//
//   afterEach(() => {
//     nock.cleanAll();
//   });
//
//   it('should create FETCH_STREAMS_SUCCESS when fetching streams is successful', () => {
//     twitchNock.reply(200, streams);
//
//     const expectedActions = [
//       { type: types.FETCH_GAMES_REQUEST },
//       { types: types.FETCH_GAMES_SUCCESS, streams },
//     ];
//
//     return store.dispatch(actions.fetch())
//       .then(() => expect(store.getActions()).toEqual(expectedActions));
//   });
//
//   it('should create FETCH_GAMES_FAILURE when fetching streams is unsuccessful', () => {
//     twitchNock.reply(500);
//
//     const expectedActions = [
//       { type: types.FETCH_GAMES_REQUEST },
//       { types: types.FETCH_GAMES_FAILURE, streams },
//     ];
//
//     return store.dispatch(actions.fetch())
//       .then(() => expect(store.getActions()).toEqual(expectedActions));
//   });
// });
