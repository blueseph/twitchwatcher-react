import React, { Component, PropTypes } from 'react';
import { Stream } from './Stream';
import { Loader } from '../shared/Loader';
import { filterStreams } from '../../utils/FilterUtils';


class Streams extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderStreams = this.renderStreams.bind(this);
    this.filterStreams = this.filterStreams.bind(this);
  }

  filterStreams(streams, filter) {
    return streams.filter(filterStreams[filter]);
  }

  renderStreams() {
    const { streams, isFetching, streamFetchError, filter } = this.props;

    // can this be done better?
    if (isFetching) return <Loader />;
    if (streamFetchError) return 'Can\'t load streams';
    if (!streams.length) return 'No Streams Found';

    return this.filterStreams(streams, filter)
            .map(stream => <Stream key={stream._id} stream={stream} />);
  }

  render() {
    return <ul className="streams"> {this.renderStreams()} </ul>;
  }
}


Streams.propTypes = {
  streams: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  streamFetchError: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};

export { Streams };
