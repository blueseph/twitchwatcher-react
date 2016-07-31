import React from 'react';
import { StreamPanel } from './StreamPanel';
import { mount } from 'enzyme';

function setup(override) {
  const props = { ...{
    dispatch: jasmine.createSpy(),
    actions: {},
    selected: {
      stream: {
        _id: 123,
        channel: {
          name: 'Reckful',
        },
      },
    },
  }, ...override };

  const wrapper = mount(<StreamPanel {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('stream panel component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('div').first().hasClass('stream-panel')).toBe(true);
  });

  it('should return an empty state if no stream is passed to it', () => {
    const { wrapper } = setup({ selected: { stream: undefined } });

    expect(wrapper.find('div').find('.empty-state').length).toBe(1);
  });
});
