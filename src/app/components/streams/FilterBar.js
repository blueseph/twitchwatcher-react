import React, { Component, PropTypes } from 'react';
import debounce from 'debounce';

class FilterBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnChange = debounce(this.handleOnChange.bind(this), 450);
  }

  handleOnChange() {
    const { dispatch, actions } = this.props;
    const { filter, stream } = actions;

    dispatch(filter.filter(this.refs.filter.value));
    if (this.refs.filter.value.length) {
      dispatch(stream.searchFor(this.refs.filter.value, { limit: 100 }));
    }
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
