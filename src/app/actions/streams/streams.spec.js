import * as types from '../../constants/RequestTypes';
import * as aTypes from '../../constants/ActionTypes';
import * as actions from './streams';

describe('streams actions', () => {
  it('fetch should DO STUFF', () => {
    // expect(actions.filterName('dota')).toEqual({
    //   type: types.FILTER_BY_NAME,
    //   term: 'dota',
    // });
  });

  it('hideStreams should create HIDE_STREAMS action', () => {
    expect(actions.hideStreams('League of Legends')).toEqual({
      type: aTypes.HIDE_STREAMS,
    });
  });

  it('selectStream should create SELECT_STREAM action', () => {
    expect(actions.selectStream({ name: 'WinterSC' })).toEqual({
      type: aTypes.SELECT_STREAM,
      stream: { name: 'WinterSC' },
    });
  });
});
