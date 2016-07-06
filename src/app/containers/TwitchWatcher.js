import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StreamBar } from '../components/streams/StreamBar';
import * as StreamActions from '../actions/streams/streams';

const TwitchWatcher = ({
  actions,
  streams,
}) => (
  <div>
    <StreamBar actions={actions} {...streams} />
  </div>
  );

TwitchWatcher.propTypes = {
  streams: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { streams } = state;

  return { streams };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(StreamActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitchWatcher);
