import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { Streams } from './Streams';

class StreamBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.fetchStreams = this.fetchStreams.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderToggle = this.renderToggle.bind(this);
  }

  componentDidMount() {
    this.fetchStreams();
  }

  handleClick() {
    const { actions, dispatch, streams } = this.props;
    const { stream } = actions;
    const { showStreams, hideStreams } = stream;
    const { visible } = streams;

    if (!visible) {
      this.fetchStreams();
      dispatch(showStreams());
    } else {
      dispatch(hideStreams());
    }
  }

  fetchStreams() {
    this.props.actions.stream.fetch({ limit: 100 });
  }

  renderClasses() {
    const { streams } = this.props;
    const { visible } = streams;

    const toggleClass = classnames({
      toggle: true,
      open: visible,
      closed: !visible,
    });

    return toggleClass;
  }

  renderToggle() {
    const { streams } = this.props;
    const { visible } = streams;

    return visible ? 'Hide' : 'Show';
  }

  render() {
    return (
      <div className="stream-bar">
        <div className={this.renderClasses()} onClick={this.handleClick}>
          {this.renderToggle()}
        </div>
        <Streams {...this.props} />
      </div>
    );
  }
}

StreamBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  streams: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
};

export { StreamBar };
