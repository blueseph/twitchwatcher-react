import { combineReducers } from 'redux';
import streams from './streams';
import filters from './filters';
import games from './games';

const rootReducer = combineReducers({
  streams,
  filters,
  games
});

export default rootReducer;
