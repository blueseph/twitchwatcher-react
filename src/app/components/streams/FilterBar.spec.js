import React from 'react';
import { FilterBar } from './FilterBar';
import { mount } from 'enzyme';

function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    stream: { visible: true },
    actions: {
      filter: {
        filter: jasmine.createSpy(),
      },
      stream: {
        searchFor: jasmine.createSpy(),
      },
    },
  }, override);

  const wrapper = mount(<FilterBar {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('filter component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('filter-bar')).toBe(true);

    expect(wrapper.ref('filter').length).toBe(1);
  });

  it('should handle the onChange event', () => {
    const { wrapper, props } = setup();

    wrapper.ref('filter').get(0).value = 'AGDQ';
    wrapper.ref('filter').simulate('change', { target: { value: 'AGDQ' } });

    setTimeout(() => {
      expect(props.dispatch).toHaveBeenCalled();
      expect(props.actions.filter.filter).toHaveBeenCalledWith('AGDQ');
      expect(props.actions.stream.searchFor).toHaveBeenCalledWith('AGDQ');
    }, 600);
  });
});
