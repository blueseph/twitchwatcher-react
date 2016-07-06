import React, { PropTypes } from 'react';

function Stream({
  stream,
}) {
  return (
    <li className="stream">
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

    </li>);
}

Stream.propTypes = {
  stream: PropTypes.object.isRequired,
};

export { Stream };
