/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import * as utils from '../../utils/TwitchUtils';
import * as types from '../../constants/RequestTypes';

export function fetch(options = {}) {
  return dispatch => {
    dispatch({ type: types.FETCH_GAMES_REQUEST });
    utils.getGamesData(options)
      .then(games => games.top)
      .then(games => games.map(game =>
            ({ name: game.game.name, logo: game.game.logo.small, id: game.game._id })))
      .then(games => dispatch({ type: types.FETCH_GAMES_SUCCESS, games }))
      .catch(() => dispatch({ type: types.FETCH_GAMES_FAILURE }));
  };
}
