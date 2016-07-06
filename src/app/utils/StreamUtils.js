export const BaseUrl = 'https://api.twitch.tv/kraken';

export const endpoints = {
  teams: 'teams',
  channel: 'channel',
  user: 'user',
  ingests: 'ingests',
  streams: 'streams',
  search: 'search',
};

export function twitchEndpointFinder(endpoint) {
  return fetch(BaseUrl)
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
          .catch(err => { throw err; });
}
