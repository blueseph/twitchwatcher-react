export const baseUrl = 'https://api.twitch.tv/kraken';

const parameterizeOptions = (options = {}) => Object.keys(options)
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

export function twitchEndpointFinder(endpoint) {
  return fetch(baseUrl)
          .then(response => response.json())
          .then(response => response._links[endpoint])
          .catch(err => { throw err; });
}

export function getTwitchData(endpoint, options = {}) {
  const params = parameterizeOptions(options);

  return fetch(`${endpoint}?${params}`)
          .then(response => response.json())
          .catch(err => { throw err; });
}

export function getGamesData(options = {}) {
  const params = parameterizeOptions(options);

    // alright so apparently this is tucked away so no one can ever find it thanks twitch/
  return fetch(`${baseUrl}/games/top?${params}`)
          .then(response => response.json())
          .catch(err => { throw err; });
}
