import * as utils from './FilterUtils';
import { FILTER_BY_GAME, FILTER_BY_NAME, REMOVE_FILTER } from '../constants/FilterTypes';

describe('filter utils', () => {
  describe('filter streams', () => {
    let streams;

    beforeEach(() => {
      streams = [
        { game: 'Starcraft II', channel: { display_name: 'Nathanias', status: 'GM Player' } },
        { game: 'Overwatch', channel: { display_name: 'TSM_Dyrus', status: 'Ranked Overwatch' } },
        { game: 'League of Legends', channel: { display_name: 'c9Sneaky', status: 'ayy LMAO' } },
      ];
    })

    it('should exist', () => {
      expect(utils.filterStreams).toBeDefined();
    });

    it('should be soigne asf', () => {
      expect(true).toBe(true);
      // if you didnt get it this is a joke.
    });

    it ('should filter by game', () => {
      const filter = { type: FILTER_BY_GAME, term: 'Starcraft II' };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered[0]).toEqual(streams[0]);
    });

    it ('should filter by name with the display_name field', () => {
      const filter = { type: FILTER_BY_NAME, term: 'Dyrus' };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered[0]).toEqual(streams[1]);
    });

    it ('should filter by name with the status field', () => {
      const filter = { type: FILTER_BY_NAME, term: 'lmao' };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered[0]).toEqual(streams[2]);
    });

    it ('shouldn\'t filter at all', () => {
      const filter = { type: REMOVE_FILTER };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered).toEqual(streams);
    });

    it ('shouldn\'t filter at all again', () => {
      const filter = {};
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered).toEqual(streams);
    });
  });
});
