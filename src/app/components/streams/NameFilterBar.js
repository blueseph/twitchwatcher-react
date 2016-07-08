import React, { Component, PropTypes } from 'react';

class NameFilterBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    const { dispatch, actions } = this.props;
    const { filterName } = actions;

    dispatch(filterName(this.refs.filter.value));
  }

  render() {
    return (
      <div className="name-filter-bar">
        <input
          className="filter"
          type="text"
          ref="filter"
          onChange={this.handleOnChange}
        />
      </div>);
  }

}

NameFilterBar.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

export { NameFilterBar };
