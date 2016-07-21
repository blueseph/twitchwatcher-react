import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StreamBar } from '../components/streams/StreamBar';
import { StreamPanel } from '../components/streamPanel/StreamPanel';

import * as StreamActions from '../actions/streams/streams';
import * as FilterActions from '../actions/filters/filters';

const TwitchWatcher = ({
  dispatch,
  actions,
  streams,
  filter,
  selected,
}) =>
  <div className="twitchwatcher">
    <StreamPanel
      selected={selected}
      actions={actions}
      dispatch={dispatch}
    />
    <StreamBar
      actions={actions}
      streams={streams}
      filter={filter}
      dispatch={dispatch}
    />
  </div>;

TwitchWatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  streams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { streams, filter, games, selected } = state;

  return { streams, filter, games, selected };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: {
      stream: bindActionCreators(StreamActions, dispatch),
      filter: bindActionCreators(FilterActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitchWatcher);
