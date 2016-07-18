import React from 'react';
import { Stream } from './Stream';
import { mount } from 'enzyme';

function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    stream: {
      preview: {
        medium: 'img.png',
      },
      channel: {
        status: 'Diabolos -- Please send raid group energy. (I HAVE NO IDEA WHAT I\'M DOING)',
        display_name: 'Psychomidget',
      },
      viewers: 99,
    },
    actions: {
      selectStream: jasmine.createSpy(),
      hideStreams: jasmine.createSpy(),
    },
  }, override);

  const wrapper = mount(<Stream {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('streams component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').hasClass('stream')).toBe(true);
  });

  it('should handle the onclick event', () => {
    const { wrapper, props } = setup();

    wrapper.find('li').simulate('click');

    expect(props.actions.selectStream).toHaveBeenCalledWith(props.stream);
    expect(props.actions.hideStreams).toHaveBeenCalled();
  });
});
