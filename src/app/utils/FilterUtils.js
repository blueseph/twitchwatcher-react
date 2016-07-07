import { FILTER_BY_GAME, FILTER_BY_NAME, REMOVE_FILTER } from '../constants/TodoFilters';

const typeToFilter = {
  [FILTER_BY_GAME]: (game) => (stream) => stream.game === game,
  [FILTER_BY_NAME]: (name) => (stream) => stream.channel.displayName === name,
  [REMOVE_FILTER]: () => (stream) => stream,
};

export const filterStreams = (streams, { filter }) => {
  const { type, term } = filter;
  return streams.filter(typeToFilter[type](term));
};
