/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { PropTypes, Component } from 'react';

import { StreamViewer } from './StreamViewer';
import { StreamChat } from './StreamChat';
import { EmptyState } from './EmptyState';

class StreamPanel extends Component {
  renderPanel() {
    const { selected } = this.props;

    if (selected.stream && selected.stream._id) {
      return (
        <div className="stream-panel">
          <StreamViewer
            selected={selected}
          />
          <StreamChat
            {...this.props}
          />
        </div>
      );
    }

    return <EmptyState />;
  }

  render() {
    return (
      <div className="stream-panel">
        {this.renderPanel()}
      </div>
    );
  }
}

StreamPanel.propTypes = {
  selected: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { StreamPanel };
