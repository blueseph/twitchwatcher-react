import React from 'react';
import { StreamPanel } from './StreamPanel';
import { shallow } from 'enzyme';

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

  const wrapper = shallow(<StreamPanel {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('streamviewer component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('stream-panel')).toBe(true);
  });
});
