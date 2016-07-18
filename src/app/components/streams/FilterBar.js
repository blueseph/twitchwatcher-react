import React, { Component, PropTypes } from 'react';

class FilterBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    const { dispatch, actions } = this.props;
    const { filter } = actions;

    dispatch(filter(this.refs.filter.value));
  }

  render() {
    return (
      <div className="filter-bar">
        <input
          className="filter"
          type="text"
          ref="filter"
          placeholder="Filter Streams"
          onChange={this.handleOnChange}
        />
      </div>);
  }

}

FilterBar.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

export { FilterBar };
