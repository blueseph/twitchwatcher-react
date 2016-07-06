import React, { Component, PropTypes } from 'react';
import { endpoints } from '../../utils/StreamUtils';

import { Streams } from './Streams';
import { StreamFilterBar } from './StreamFilterBar';

class StreamBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.fetchStreams = this.fetchStreams.bind(this);
  }

  componentDidMount() {
    this.fetchStreams();
  }

  fetchStreams() {
    this.props.actions.fetchStreams(endpoints.streams);
  }

  render() {
    return (
      <div className="stream-bar">
        <StreamFilterBar />
        <Streams {...this.props} />
      </div>
    );
  }
}

StreamBar.propTypes = {
  actions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  streams: PropTypes.array.isRequired,
};

export { StreamBar };
