/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { filterStreams } from '../../utils/FilterUtils';

import { Stream } from './Stream';
import { Loader } from '../shared/Loader';
import { FilterBar } from './FilterBar';

class Streams extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderStreams = this.renderStreams.bind(this);
  }

  renderClasses() {
    const { streams } = this.props;
    const { visible } = streams;

    const streamClass = classnames({
      streams: true,
      open: visible,
      closed: !visible,
    });

    return streamClass;
  }

  renderStreams() {
    const { streams, filter, actions, dispatch } = this.props;
    const { isFetching, streamFetchError, data } = streams;

    // can this be done better?
    if (isFetching) return <Loader />;
    if (streamFetchError) return 'Can\'t load streams';
    if (data === undefined || !data.length === 0) return 'No Streams Found';

    return filterStreams(data, filter)
            .map(stream =>
              <Stream
                key={stream._id}
                stream={stream}
                actions={actions.stream}
                dispatch={dispatch}
              />);
  }

  render() {
    const { actions, dispatch } = this.props;
    const { filter } = actions;

    return (<div className={this.renderClasses()}>
      <FilterBar actions={filter} dispatch={dispatch} />
      <ul className="streams"> {this.renderStreams()} </ul>
    </div>);
  }
}

Streams.propTypes = {
  streams: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { Streams };
