/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { Component, PropTypes } from 'react';

class StreamViewer extends Component {
  renderStream() {
    const { selected } = this.props;
    const { stream } = selected;

    if (!stream._id) { return ''; }
    return (
      <iframe
        frameBorder="0"
        width="100%"
        style={{ height: 'calc(100% - 1px)' }}
        allowFullScreen="1"
        src={`http://player.twitch.tv/?channel=${stream.channel.name}&html5=true`}
      />
    );
  }

  render() {
    return (
      <div className="stream-viewer">
        {this.renderStream()}
      </div>
    );
  }
}

StreamViewer.propTypes = {
  selected: PropTypes.object.isRequired,
};

export { StreamViewer };
