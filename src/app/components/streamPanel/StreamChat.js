/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { Component, PropTypes } from 'react';

class StreamChat extends Component {
  renderStream() {
    const { selected } = this.props;
    const { stream } = selected;

    if (!stream._id) { return ''; }
    return (
      <iframe
        frameBorder="0"
        width="100%"
        style={{ height: 'calc(100% - 1px)' }}
        src={`http://twitch.tv/${stream.channel.name}/chat`}
      />
    );
  }

  render() {
    return (
      <div className="stream-chat">
        {this.renderStream()}
      </div>
    );
  }
}

StreamChat.propTypes = {
  selected: PropTypes.object.isRequired,
};

export { StreamChat };
