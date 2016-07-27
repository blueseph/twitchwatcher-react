import React from 'react';
import { StreamChat } from './StreamChat';
import { shallow } from 'enzyme';

function setup(override) {
  const props = { ...{
    actions: {
      stream: {
        hideChat: jasmine.createSpy(),
        showChat: jasmine.createSpy(),
      },
    },
    dispatch: jasmine.createSpy(),
    displayChat: true,
    selected: {
      stream: {
        _id: 123,
        channel: {
          name: 'Reckful',
        },
      },
    },
  }, ...override };

  const wrapper = shallow(<StreamChat {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('stream chat component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('iframe').length).toBe(1);
  });

  it('should render nothing if there is no selected stream', () => {
    const { wrapper } = setup({ selected: { stream: 0 } });

    expect(wrapper.find('iframe').length).toBe(0);
  });

  describe('handleClick', () => {
    it('should handle a click if chat is open', () => {
      const { wrapper, props } = setup({ displayChat: true });

      wrapper.find('.chat-toggle').simulate('click');

      expect(props.actions.stream.showChat).toHaveBeenCalled();
    });

    it('should handle a click if chat is closed', () => {
      const { wrapper, props } = setup({ displayChat: false });

      wrapper.find('.chat-toggle').simulate('click');

      expect(props.actions.stream.showChat).toHaveBeenCalled();
    });
  });
});
