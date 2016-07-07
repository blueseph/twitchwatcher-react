import * as utils from '../../utils/TwitchUtils';
import * as types from '../../constants/RequestTypes';

export function fetch() {
  return dispatch => {
    dispatch({ type: types.FETCH_GAMES_REQUEST });
    utils.twitchEndpointFinder(utils.endpoints.streams)
    .then(endpoint => utils.getGamesData(endpoint))
    .then(games => games.top)
    .then(games => games.map(game => ({ name: game.game.name, logo: game.game.logo.small, id: game.game._id })))
    .then(games => dispatch({ type: types.FETCH_GAMES_SUCCESS, games }))
    .catch(() => dispatch({ type: types.FETCH_GAMES_FAILURE }));
  };
}
