import React from 'react';
import { EmptyState } from './EmptyState';
import { shallow } from 'enzyme';

function setup() {
  const wrapper = shallow(<EmptyState />);

  return {
    wrapper,
  };
}

describe('emptystate component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('.hero').length).toBe(1);
  });
});
