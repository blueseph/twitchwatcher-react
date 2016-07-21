import { combineReducers } from 'redux';
import streams from './streams/streams';
import selected from './streams/selected';
import filter from './streams/filter';

const rootReducer = combineReducers({
  selected,
  streams,
  filter,
});

export default rootReducer;
