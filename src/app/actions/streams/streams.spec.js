import * as types from '../../constants/RequestTypes';
import * as aTypes from '../../constants/ActionTypes';
import * as actions from './streams';
import * as utils from '../../utils/TwitchUtils';
import { mockStore } from '../../utils/TestUtils';


describe('filter actions', () => {
  describe('hideStreams', () => {
    it('should exist', () => {
      expect(actions.hideStreams).toBeDefined();
    });

    it('should return a HIDE_STREAMS action', () => {
      expect(actions.hideStreams()).toEqual({ type: aTypes.HIDE_STREAMS });
    });
  });

  describe('showStreams', () => {
    it('should exist', () => {
      expect(actions.showStreams).toBeDefined();
    });

    it('should return a SHOW_STREAMS action', () => {
      expect(actions.showStreams()).toEqual({ type: aTypes.SHOW_STREAMS });
    });
  });

  describe('selectStream', () => {
    it('should exist', () => {
      expect(actions.selectStream).toBeDefined();
    });

    it('should return a SELECT_STREAM action', () => {
      const stream = { name: 'WinterSC' };

      expect(actions.selectStream(stream)).toEqual({ type: aTypes.SELECT_STREAM, stream });
    });
  });

  describe('fetch', () => {
    it('should create a FETCH_STREAMS_SUCCESS when fetching games is successful', done => {
      const streams = { streams: [{ channel: { display_name: 'Sodapoppin' } }] };
      spyOn(utils, 'twitchEndpointFinder').and.returnValue(Promise.resolve('doesnt matter'));
      spyOn(utils, 'getTwitchData').and.returnValue(Promise.resolve(streams));

      const expectedActions = [
        { type: types.FETCH_STREAMS_REQUEST },
        { type: types.FETCH_STREAMS_SUCCESS, data: streams.streams },
      ];

      const store = mockStore({}, expectedActions, done, expect);
      store.dispatch(actions.fetch());
    });

    it('should create a FETCH_STREAMS_FAILURE when fetching games fails', done => {
      spyOn(utils, 'twitchEndpointFinder').and.returnValue(Promise.reject());

      const expectedActions = [
        { type: types.FETCH_STREAMS_REQUEST },
        { type: types.FETCH_STREAMS_FAILURE },
      ];

      const store = mockStore({}, expectedActions, done, expect);
      store.dispatch(actions.fetch());
    });
  });

  describe('update', () => {
    it('should create a UPDATE_STREAMS_SUCCESS when fetching games is successful', done => {
      const streams = { streams: [{ channel: { display_name: 'Sodapoppin' } }] };
      spyOn(utils, 'twitchEndpointFinder').and.returnValue(Promise.resolve('doesnt matter'));
      spyOn(utils, 'getTwitchData').and.returnValue(Promise.resolve(streams));

      const expectedActions = [
        { type: types.UPDATE_STREAMS_REQUEST },
        { type: types.UPDATE_STREAMS_SUCCESS, data: streams.streams },
      ];

      const store = mockStore({}, expectedActions, done, expect);
      store.dispatch(actions.searchFor());
    });

    it('should create a FETCH_STREAMS_FAILURE when fetching games fails', done => {
      spyOn(utils, 'twitchEndpointFinder').and.returnValue(Promise.reject());

      const expectedActions = [
        { type: types.UPDATE_STREAMS_REQUEST },
        { type: types.UPDATE_STREAMS_FAILURE },
      ];

      const store = mockStore({}, expectedActions, done, expect);
      store.dispatch(actions.searchFor());
    });
  });
});
