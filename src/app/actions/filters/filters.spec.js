import * as types from '../../constants/FilterTypes';
import * as actions from './filters';

describe('filter actions', () => {
  it('filterName should create FILTER_BY_NAME action', () => {
    expect(actions.filterName('dota')).toEqual({
      type: types.FILTER_BY_NAME,
      term: 'dota'
    });
  });

  it('filterGame should create FILTER_BY_GAME action', () => {
    expect(actions.filterGame('League of Legends')).toEqual({
      type: types.FILTER_BY_GAME,
      term: 'League of Legends'
    });
  });

  it('removeFilter should create FILTER_BY_GAME action', () => {
    expect(actions.removeFilter()).toEqual({
      type: types.REMOVE_FILTER,
    });
  });
});
