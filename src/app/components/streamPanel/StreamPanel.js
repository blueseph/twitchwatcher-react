/* eslint no-underscore-dangle:0 */
/* twitch natively has underscores as ids. nothing we can do */

import React, { PropTypes } from 'react';

import { StreamViewer } from './StreamViewer';
import { StreamChat } from './StreamChat';

const StreamPanel = ({
  selected,
  actions,
  dispatch,
}) =>
  <div className="stream-panel">
    <StreamViewer
      selected={selected}
    />
    <StreamChat
      selected={selected}
      dispatch={dispatch}
      actions={actions}
    />
  </div>;

StreamPanel.propTypes = {
  selected: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export { StreamPanel };
