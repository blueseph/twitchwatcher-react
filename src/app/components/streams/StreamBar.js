import React, { Component, PropTypes } from 'react';

import { Streams } from './Streams';
import { NameFilterBar } from './NameFilterBar';
import { GameFilterBar } from './GameFilterBar';

class StreamBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.fetchStreams = this.fetchStreams.bind(this);
    this.fetchGames = this.fetchGames.bind(this);
  }

  componentDidMount() {
    this.fetchStreams();
    this.fetchGames();
  }

  fetchGames() {
    this.props.actions.games.fetch({ limit: 100 });
  }

  fetchStreams() {
    this.props.actions.stream.fetch({ limit: 100 });
  }

  render() {
    const { actions, streams, filters, games, dispatch } = this.props;

    return (
      <div className="stream-bar">
        <NameFilterBar actions={actions.filters} dispatch={dispatch} />
        <GameFilterBar actions={actions.filters} dispatch={dispatch} games={games} />
        <Streams actions={actions.stream} streams={streams} filters={filters} dispatch={dispatch} />
      </div>
    );
  }
}

StreamBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  streams: PropTypes.object.isRequired,
  games: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
};

export { StreamBar };
