import { FILTER_BY_GAME, FILTER_BY_NAME, REMOVE_FILTER } from '../constants/FilterTypes';

const typeToFilter = {
  [FILTER_BY_GAME]: (term) => (stream) => stream.game === term,
  [FILTER_BY_NAME]: (term) =>
    (stream) => stream.channel.display_name.toLowerCase().includes(term) ||
                stream.channel.status.toLowerCase().includes(term),
  [REMOVE_FILTER]: () => (stream) => stream,
  [undefined]: () => (stream) => stream,
};

export const filterStreams = (streams, { term, type }) => streams.filter(typeToFilter[type](term));
