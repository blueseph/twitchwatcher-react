import * as types from '../../constants/FilterTypes';
import * as actions from './filters';

describe('filter actions', () => {
  describe('filter', () => {
    it('should exist', () => {
      expect(actions.filter).toBeDefined();
    });

    it('should return a FILTER_BY_NAME action', () => {
      const term = 'dota';

      expect(actions.filter(term)).toEqual({ type: types.FILTER, term });
    });
  });
});
