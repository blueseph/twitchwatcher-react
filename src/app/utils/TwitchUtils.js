/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

export const baseUrl = 'https://api.twitch.tv/kraken';

export const parameterizeOptions = (options = {}) => Object.keys(options)
                      .map(key => `${key}=${encodeURIComponent(options[key])}`)
                      .join('&');

export const endpoints = {
  teams: 'teams',
  channel: 'channel',
  user: 'user',
  ingests: 'ingests',
  streams: 'streams',
  search: 'search',
};

export const search = {
  streams: 'search_streams',
  games: 'search_games',
};

export async function twitchEndpointFinder(endpoint, url = baseUrl) {
  const twitchEndpoints = await fetch(url);
  const twitchEndpointsJSON = await twitchEndpoints.json();
  return twitchEndpointsJSON._links[endpoint];
}

export async function getTwitchData(endpoint, options = {}) {
  const params = parameterizeOptions(options);

  const data = await fetch(`${endpoint}?${params}`);
  const json = await data.json();
  return json;
}
