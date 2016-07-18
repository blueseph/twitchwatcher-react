import { combineReducers } from 'redux';
import streams from './streams/streams';
import selected from './streams/selected';
import filter from './streams/filter';
import games from './streams/games';

const rootReducer = combineReducers({
  selected,
  streams,
  filter,
  games,
});

export default rootReducer;
