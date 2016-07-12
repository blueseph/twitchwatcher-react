/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { PropTypes } from 'react';

import { StreamViewer } from './StreamViewer';
import { StreamChat } from './StreamChat';

const StreamPanel = ({
  selected,
}) =>
  <div className="stream-panel">
    <StreamViewer
      selected={selected}
    />
    <StreamChat
      selected={selected}
    />
  </div>;

StreamPanel.propTypes = {
  selected: PropTypes.object.isRequired,
};

export { StreamPanel };
