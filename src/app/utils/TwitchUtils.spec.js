/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */

import * as utils from './TwitchUtils';
import { testAsync } from './TestUtils';

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

    it('should return an endpoint', testAsync(async () => {
      spyOn(window, 'fetch').and.returnValue(
        new Promise(resolve =>
          resolve({
            json() {
              return {
                _links: endpoints,
              };
            },
          })
        )
      );

      const requested = 'streams';
      const response = await utils.twitchEndpointFinder(requested);
      expect(response).toEqual(endpoints[requested]);
    }));

    it('should throw an error on failure', () => {
      spyOn(window, 'fetch').and.returnValue(new Error());
      const requested = 'streams';

      expect(async () => utils.twitchEndpointFinder(requested).toThrow(new Error()));
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

    it('should get streams data', testAsync(async () => {
      const streams = [{ channel: { display_name: 'Voyboy' } }];
      spyOn(window, 'fetch').and.returnValue(
        new Promise(resolve =>
          resolve({
            json() {
              return streams;
            },
          })
        )
      );

      const response = await utils.getTwitchData(endpoints.streams);
      expect(response).toEqual(streams);
    }));

    it('should throw an error on failure', () => {
      spyOn(window, 'fetch').and.returnValue(new Error());

      expect(async () => utils.getTwitchData(endpoints.streams).toThrow(new Error()));
    });
  });
});
