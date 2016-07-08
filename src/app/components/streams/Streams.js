import React, { Component, PropTypes } from 'react';
import { Stream } from './Stream';
import { Loader } from '../shared/Loader';
import { filterStreams } from '../../utils/FilterUtils';

class Streams extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderStreams = this.renderStreams.bind(this);
  }

  renderStreams() {
    const { streams, filters, actions, dispatch } = this.props;
    const { isFetching, streamFetchError, data } = streams;

    // can this be done better?
    if (isFetching) return <Loader />;
    if (streamFetchError) return 'Can\'t load streams';
    if (!data.length) return 'No Streams Found';

    return filterStreams(data, filters)
            .map(stream =>
              <Stream key={stream.id} stream={stream} actions={actions} dispatch={dispatch} />);
  }

  render() {
    return <ul className="streams"> {this.renderStreams()} </ul>;
  }
}


Streams.propTypes = {
  streams: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { Streams };
