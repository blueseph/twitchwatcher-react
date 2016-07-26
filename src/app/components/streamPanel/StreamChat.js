/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class StreamChat extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, selected, dispatch } = this.props;
    const { hideChat, showChat } = actions.stream;
    const { displayChat } = selected;

    const visibility = displayChat ? hideChat : showChat;

    dispatch(visibility());
  }

  renderToggle() {
    const { selected } = this.props;
    const { displayChat } = selected;

    const toggleClass = classnames({
      'chat-toggle': true,
      open: displayChat,
      closed: !displayChat,
    });

    return toggleClass;
  }

  renderClasses() {
    const { selected } = this.props;
    const { stream } = selected;
    const { displayChat } = selected;

    const toggleClass = classnames({
      'stream-chat': true,
      hidden: !stream.id,
      open: displayChat,
      closed: !displayChat,
    });

    return toggleClass;
  }

  renderStream() {
    const { selected } = this.props;
    const { stream } = selected;

    if (stream._id) {
      return (
        <iframe
          frameBorder="0"
          width="100%"
          style={{ height: 'calc(100% - 1px)' }}
          src={`http://twitch.tv/${stream.channel.name}/chat`}
        />
      );
    }

    return '';
  }

  render() {
    return (
      <div className={this.renderClasses()}>
        <div
          className={this.renderToggle()}
          onClick={this.handleClick}
        >
          toggle chat
        </div>
        {this.renderStream()}
      </div>
    );
  }
}

StreamChat.propTypes = {
  selected: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { StreamChat };
