import * as utils from './TwitchUtils';

describe('Twitch Utilities', () => {
  describe('parameterize object', () => {
    it('should exist', () => {
      expect(utils.parameterizeOptions).toBeDefined();
    });

    it('should parameterize a simple object', () => {
      const obj = { limit: 100 };

      expect(utils.parameterizeOptions(obj)).toEqual('limit=100');
    });

    it('should parameterize a complex object', () => {
      const obj = { limit: 100, offset: 100 };

      expect(utils.parameterizeOptions(obj)).toEqual('limit=100&offset=100');
    });
  });

  describe('twitch endpoint finder', () => {
    let endpoints;

    beforeEach(() => {
      endpoints = {
        streams: 'https://api.twitch.tv/kraken/streams',
      };
    });

    it('should exist', () => {
      expect(utils.twitchEndpointFinder).toBeDefined();
    });

    it('should return an endpoint', () => {
      spyOn(window, 'fetch').and.returnValue(Promise.resolve(endpoints));
      const requested = 'streams';

      utils.twitchEndpointFinder(requested).then(res => {
        expect(res).toEqual(endpoints[requested]);
      });
    });

    it('should throw an error on failure', () => {
      const error = 'it broke';
      spyOn(window, 'fetch').and.returnValue(Promise.reject(error));
      const requested = 'streams';

      utils.twitchEndpointFinder(requested).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });

  describe('get twitch data', () => {
    let endpoints;

    beforeEach(() => {
      endpoints = {
        streams: 'https://api.twitch.tv/kraken/streams',
      };
    });

    it('should exist', () => {
      expect(utils.getTwitchData()).toBeDefined();
    });

    it('should get streams data', () => {
      const streams = [{ channel: { display_name: 'Voyboy' } }];
      spyOn(window, 'fetch').and.returnValue(Promise.resolve(streams));

      utils.getTwitchData(endpoints.streams).then(res => {
        expect(res).toEqual(streams);
      });
    });

    it('should throw an error on failure', () => {
      const error = 'it broke';
      spyOn(window, 'fetch').and.returnValue(Promise.reject(error));

      utils.getTwitchData(endpoints.streams).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });

  describe('get games data', () => {
    let endpoints;

    beforeEach(() => {
      endpoints = {
        games: 'https://api.twitch.tv/kraken/games/top/',
      };
    });

    it('should exist', () => {
      expect(utils.getGamesData()).toBeDefined();
    });

    it('should get streams data', () => {
      const games = { top: [{ game: { name: 'Overwatch' } }] };
      spyOn(window, 'fetch').and.returnValue(Promise.resolve(games));

      utils.getGamesData(endpoints.games).then(res => {
        expect(res).toEqual(games);
      });
    });

    it('should throw an error on failure', () => {
      const error = 'it broke';
      spyOn(window, 'fetch').and.returnValue(Promise.reject(error));

      utils.getGamesData(endpoints.games).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });
});
