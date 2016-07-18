import * as utils from './FilterUtils';

describe('filter utils', () => {
  describe('filter streams', () => {
    let streams;

    beforeEach(() => {
      streams = [
        { game: 'Starcraft II', channel: { display_name: 'Nathanias', status: 'GM Player' } },
        { game: 'Overwatch', channel: { display_name: 'TSM_Dyrus', status: 'Ranked Overwatch' } },
        { game: 'League of Legends', channel: { display_name: 'c9Sneaky', status: 'ayy LMAO' } },
      ];
    });

    it('should exist', () => {
      expect(utils.filterStreams).toBeDefined();
    });

    it('should be soigne asf', () => {
      expect(true).toBe(true);
      // if you didnt get it this is a joke.
    });

    it('should filter by game', () => {
      const filter = { term: 'Starcraft II' };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered[0]).toEqual(streams[0]);
    });

    it('should filter by name with the display_name field', () => {
      const filter = { term: 'Dyrus' };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered[0]).toEqual(streams[1]);
    });

    it('should filter by name with the status field', () => {
      const filter = { term: 'lmao' };
      const filtered = utils.filterStreams(streams, filter);

      expect(filtered[0]).toEqual(streams[2]);
    });
  });
});
