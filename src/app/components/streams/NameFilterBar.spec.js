import React from 'react';
import { NameFilterBar } from './NameFilterBar';
import { mount } from 'enzyme';

function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    actions: {
      filterName: jasmine.createSpy(),
    },
  }, override);

  const wrapper = mount(<NameFilterBar {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('namefilter component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('name-filter-bar')).toBe(true);

    expect(wrapper.ref('filter').length).toBe(1);
  });

  it('should handle the onclick event', () => {
    const { wrapper, props } = setup();

    wrapper.ref('filter').get(0).value = 'AGDQ';
    wrapper.ref('filter').simulate('change', { target: { value: 'AGDQ' } });

    expect(props.dispatch).toHaveBeenCalled();
    expect(props.actions.filterName).toHaveBeenCalledWith('AGDQ');
  });
});
