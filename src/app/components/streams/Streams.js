/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { Component, PropTypes } from 'react';
import { Stream } from './Stream';
import { Loader } from '../shared/Loader';
import { filterStreams } from '../../utils/FilterUtils';
import classnames from 'classnames';

class Streams extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderStreams = this.renderStreams.bind(this);
    this.renderToggle = this.renderToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, dispatch, streams } = this.props;
    const { showStreams, hideStreams } = actions;
    const { visible } = streams;

    const visibility = visible ? hideStreams : showStreams;

    dispatch(visibility());
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

  renderToggle() {
    const { streams } = this.props;
    const { visible } = streams;

    return visible ? 'Show' : 'Hide';
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
              <Stream key={stream._id} stream={stream} actions={actions} dispatch={dispatch} />);
  }

  render() {
    return (<div>
      <div onClick={this.handleClick}> {this.renderToggle()} </div>
      <ul className={this.renderClasses()}> {this.renderStreams()} </ul>
    </div>);
  }
}


Streams.propTypes = {
  streams: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { Streams };
