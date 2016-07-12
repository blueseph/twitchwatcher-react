import { combineReducers } from 'redux';
import streams from './streams/streams';
import selected from './streams/selected';
import filters from './streams/filters';
import games from './streams/games';

const rootReducer = combineReducers({
  selected,
  streams,
  filters,
  games,
});

export default rootReducer;
