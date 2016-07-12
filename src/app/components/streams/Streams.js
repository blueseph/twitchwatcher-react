/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { filterStreams } from '../../utils/FilterUtils';

import { Stream } from './Stream';
import { Loader } from '../shared/Loader';
import { NameFilterBar } from './NameFilterBar';
import { GameFilterBar } from './GameFilterBar';

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
    const { streams, filters, actions, dispatch } = this.props;
    const { isFetching, streamFetchError, data } = streams;

    // can this be done better?
    if (isFetching) return <Loader />;
    if (streamFetchError) return 'Can\'t load streams';
    if (data === undefined || !data.length === 0) return 'No Streams Found';

    return filterStreams(data, filters)
            .map(stream =>
              <Stream
                key={stream._id}
                stream={stream}
                actions={actions.stream}
                dispatch={dispatch}
              />);
  }

  render() {
    const { actions, games, dispatch } = this.props;

    return (<div className={this.renderClasses()}>
      <NameFilterBar actions={actions.filters} dispatch={dispatch} />
      <GameFilterBar actions={actions.filters} dispatch={dispatch} games={games} />
      <ul className="streams"> {this.renderStreams()} </ul>
    </div>);
  }
}

Streams.propTypes = {
  streams: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  games: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { Streams };
