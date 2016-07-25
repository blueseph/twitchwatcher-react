import React from 'react';

const EmptyState = () =>
  <div>
    <h1>Twitch Watcher</h1>
    <h5>A simple way to watch twitch.</h5>

    <div className="hero">
      <div className="streamer">
        <p>Choose your favorite streamer</p>
      </div>
      <div className="divider">
        OR
      </div>
      <div className="game">
        <p>Choose your favorite game</p>
      </div>
    </div>
  </div>;

export { EmptyState };
