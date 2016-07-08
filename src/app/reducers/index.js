import { combineReducers } from 'redux';
import streams from './streams';
import selected from './selected';
import filters from './filters';
import games from './games';

const rootReducer = combineReducers({
  selected,
  streams,
  filters,
  games,
});

export default rootReducer;
