import React, { Component, PropTypes } from 'react';

class GameFilterBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    const { dispatch } = this.props;
    const { filterGame } = this.props.actions;

    dispatch(filterGame(this.refs.filter.value));
  }

  renderGames() {
    const { games } = this.props;
    const { data } = games;

    return data.map(game => <option key={game.id} value={game.name}>{game.name} </option>);
  }

  render() {

    return (
      <div className="game-filter-bar">
        <select
          className="filter"
          type="text"
          ref="filter"
          onChange={this.handleOnChange}
        >
          {this.renderGames()}
        </select>
      </div>);
  }

}

GameFilterBar.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  games: PropTypes.object.isRequired,
};

export { GameFilterBar };
