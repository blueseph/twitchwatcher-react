import * as types from '../../constants/RequestTypes';
import * as aTypes from '../../constants/ActionTypes';
import * as actions from './streams';

describe('filter actions', () => {
  describe('hideStreams', () => {
    it('should exist', () => {
      expect(actions.hideStreams).toBeDefined();
    });

    it('should return a HIDE_STREAMS action', () => {
      expect(actions.hideStreams()).toEqual({ type: aTypes.HIDE_STREAMS });
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
});
