import * as utils from './TwitchUtils';
import nock from 'nock';

describe('Twitch Utilities', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('parameterize object', () => {
    it('should exist', () => {
      expect(utils.parameterizeOptions).toBeDefined();
    })

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
    let endpointNock;
    let endpoints;

    beforeEach(() => {
      endpoints = {
        streams: 'https://api.twitch.tv/kraken/streams',
      };
      endpointNock = nock(utils.baseUrl).get('/');
    });

    it('should exist', () => {
      expect(utils.twitchEndpointFinder).toBeDefined();
    });

    it('should return an endpoint', () => {
      endpointNock.reply(200, endpoints);
      const requested = 'streams';

      utils.twitchEndpointFinder(requested).then(res => {
        expect(res).toEqual(endpoints[requested]);
      });
    });

    it('should throw an error on failure', () => {
      const error = 'it broke';
      endpointNock.reply(500, error);
      const requested = 'streams';

      utils.twitchEndpointFinder(requested).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });

  describe('get twitch data', () => {
    let dataNock;
    let endpoints;

    beforeEach(() => {
      endpoints = {
        streams: 'https://api.twitch.tv/kraken/streams',
      };
      dataNock = nock(utils.baseUrl).get('/streams');
    });

    it('should exist', () => {
      expect(utils.getTwitchData()).toBeDefined();
    });

    it('should get streams data', () => {
      const streams = [ { channel: { display_name: 'Voyboy'} }];

      dataNock.reply(200, streams);
      utils.getTwitchData(endpoints.streams).then(res => {
        expect(res).toEqual(streams);
      });
    });

    it('should throw an error on failure', () => {
      const error = 'it broke';
      dataNock.reply(500, error);

      utils.getTwitchData(endpoints.streams).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });

  describe('get games data', () => {
    let gamesNock;
    let endpoints;

    beforeEach(() => {
      endpoints = {
        games: 'https://api.twitch.tv/kraken/games/top/',
      };
      gamesNock = nock(utils.baseUrl).get('games/top/');
    });

    it('should exist', () => {
      expect(utils.getGamesData()).toBeDefined();
    });

    it('should get streams data', () => {
      const games = { top: [{ game: { name: 'Overwatch' } }] };

      gamesNock.reply(200, games);
      utils.getGamesData(endpoints.games).then(res => {
        expect(res).toEqual(games);
      });
    });

    it('should throw an error on failure', () => {
      const error = 'it broke';
      gamesNock.reply(500, error);

      utils.getGamesData(endpoints.games).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });
});
