import React, { Component, PropTypes } from 'react';

class Stream extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { stream, dispatch, actions } = this.props;
    const { selectStream } = actions;

    dispatch(selectStream(stream));
  }

  render() {
    const { stream } = this.props;

    return (
      <li
        onClick={this.handleClick}
        className="stream"
      >
        <div className="picture">
          <img src={stream.preview.medium} alt="Stream Preview" />
        </div>
        <div className="streamInfo">
          <div className="streamInfoContainer">
            <div className="status">{stream.channel.status}</div>
            <div className="viewerBar">
              {stream.viewers} watching <span className="name">{stream.channel.display_name}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

Stream.propTypes = {
  stream: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { Stream };
