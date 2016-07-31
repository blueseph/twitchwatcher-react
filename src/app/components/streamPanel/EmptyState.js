import React from 'react';

const EmptyState = () =>
  <div className="empty-state">
    <h1>Twitch Watcher</h1>
    <h5>A simpler way to watch twitch.</h5>

    <div className="start-hint">
      <p>Start here. Try searching for <span className="text-highlight">Dota 2.</span></p>
      <img src="/media/images/right-curve-arrow.svg" role="presentation" height="35px" />
    </div>
  </div>;

export { EmptyState };
