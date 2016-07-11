import * as types from '../../constants/FilterTypes';
import * as actions from './filters';

describe('filter actions', () => {
  describe('filterName', () => {
    it('should exist', () => {
      expect(actions.filterName).toBeDefined();
    });

    it('should return a FILTER_BY_NAME action', () => {
      const term = 'dota';

      expect(actions.filterName(term)).toEqual({ type: types.FILTER_BY_NAME, term });
    });
  });

  describe('gameName', () => {
    it('should exist', () => {
      expect(actions.filterGame).toBeDefined();
    });

    it('should return a FILTER_BY_GAME action', () => {
      const term = 'League of Legends';

      expect(actions.filterGame(term)).toEqual({ type: types.FILTER_BY_GAME, term });
    });
  });

  describe('removeFilter', () => {
    it('should exist', () => {
      expect(actions.removeFilter).toBeDefined();
    });

    it('should return a FILTER_BY_GAME action', () => {
      expect(actions.removeFilter()).toEqual({ type: types.REMOVE_FILTER });
    });
  });
});
