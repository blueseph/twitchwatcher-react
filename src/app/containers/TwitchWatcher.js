import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StreamBar } from '../components/streams/StreamBar';
import { StreamViewer } from '../components/streamViewer/StreamViewer';

import * as StreamActions from '../actions/streams/streams';
import * as FilterActions from '../actions/filters/filters';
import * as GamesActions from '../actions/games/games';

const TwitchWatcher = ({
  dispatch,
  actions,
  streams,
  filters,
  games,
  selected,
}) =>
  <div className="twitchwatcher">
    <StreamViewer
      selected={selected}
    />
    <StreamBar
      actions={actions}
      streams={streams}
      filters={filters}
      dispatch={dispatch}
      games={games}
    />
  </div>;

TwitchWatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  streams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  games: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { streams, filters, games, selected } = state;

  return { streams, filters, games, selected };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: {
      stream: bindActionCreators(StreamActions, dispatch),
      filters: bindActionCreators(FilterActions, dispatch),
      games: bindActionCreators(GamesActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitchWatcher);
