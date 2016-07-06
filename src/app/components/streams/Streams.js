import React, { Component, PropTypes } from 'react';
import { Stream } from './Stream';
import { Loader } from '../shared/Loader';

class Streams extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderStreams = this.renderStreams.bind(this);
  }

  renderStreams() {
    const { streams, isFetching, streamFetchError } = this.props;

    // can this be done better?
    if (isFetching) return <Loader />;
    if (streamFetchError) return 'Can\'t load streams';

    return (streams.length) ? streams.map(stream => <Stream key={stream._id} stream={stream} />)
                              : 'No Streams Found';
  }

  render() {
    return <ul className="streams"> {this.renderStreams()} </ul>;
  }
}


Streams.propTypes = {
  streams: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  streamFetchError: PropTypes.bool.isRequired,
};

export { Streams };
