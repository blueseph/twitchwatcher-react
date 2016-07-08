/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

export const baseUrl = 'https://api.twitch.tv/kraken';

export const endpoints = {
  teams: 'teams',
  channel: 'channel',
  user: 'user',
  ingests: 'ingests',
  streams: 'streams',
  search: 'search',
};

export function twitchEndpointFinder(endpoint) {
  return fetch(baseUrl)
          .then(response => response.json())
          .then(response => response._links[endpoint])
          .catch(err => { throw err; });
}

export function getTwitchData(endpoint, options = {}) {
  const params = Object.keys(options)
                        .map(key => `${key}=${encodeURIComponent(options[key])}`)
                        .join('&');

  return fetch(`${endpoint}?${params}`)
          .then(response => response.json())
          .then(response => ({ ...response, id: response._id }))
          .catch(err => { throw err; });
}

export function getGamesData(options = {}) {
  const params = Object.keys(options)
                        .map(key => `${key}=${encodeURIComponent(options[key])}`)
                        .join('&');

    // alright so apparently this is tucked away so no one can ever find it thanks twitch/
  return fetch(`${baseUrl}/games/top?${params}`)
          .then(response => response.json())
          .catch(err => { throw err; });
}
