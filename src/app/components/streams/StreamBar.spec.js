import React from 'react';
import { StreamBar } from './StreamBar';
import { shallow, mount } from 'enzyme';


function setup(override) {
  const props = { ...{
    dispatch: jasmine.createSpy(),
    filter: {
      term: '',
    },
    streams: {
      data: [{
        _id: 123,
        preview: {
          medium: 'img.png',
        },
        channel: {
          status: 'Diabolos -- Please send raid group energy. (I HAVE NO IDEA WHAT I\'M DOING)',
          display_name: 'Psychomidget',
        },
        viewers: 99,
        visible: true,
      }],
    },
    actions: {
      filter: {
        filter: jasmine.createSpy(),
      },
      stream: {
        showStreams: jasmine.createSpy(),
        hideStreams: jasmine.createSpy(),
        fetch: jasmine.createSpy(),
      },
    },
  }, ...override };

  const wrapper = shallow(<StreamBar {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('stream bar component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('div').first().hasClass('stream-bar')).toBe(true);
  });

  it('should call functions on componentDidMount', () => {
    const cdmProps = {
      dispatch: jasmine.createSpy(),
      filter: {
        term: '',
      },
      streams: { data: [{
        _id: 123,
        preview: {
          medium: 'img.png',
        },
        channel: {
          status: 'Diabolos -- Please send raid group energy. (I HAVE NO IDEA WHAT I\'M DOING)',
          display_name: 'Psychomidget',
        },
        viewers: 99,
        visible: true,
      },
      ] },
      actions: {
        filter: {
          filter: jasmine.createSpy(),
        },
        stream: {
          showStreams: jasmine.createSpy(),
          hideStreams: jasmine.createSpy(),
          fetch: jasmine.createSpy(),
        },
      },
    };

    expect(cdmProps.actions.stream.fetch).not.toHaveBeenCalled();

    const wrapper = mount(<StreamBar {...cdmProps} />);
    wrapper.update();

    expect(cdmProps.actions.stream.fetch).toHaveBeenCalled();
  });

  describe('should handle the click event', () => {
    it('should hide if shown', () => {
      const { props, wrapper } = setup({ streams: { visible: true } });

      wrapper.find('.toggle').simulate('click');

      expect(wrapper.find('.toggle').find('span').hasClass('icon-circle-down')).toEqual(true);
      expect(props.actions.stream.hideStreams).toHaveBeenCalled();
    });

    it('should show if hidden', () => {
      const { props, wrapper } = setup({ streams: { visible: false } });

      wrapper.find('.toggle').simulate('click');

      expect(wrapper.find('.toggle').find('span').hasClass('icon-circle-up')).toEqual(true);
      expect(props.actions.stream.showStreams).toHaveBeenCalled();
      expect(props.actions.stream.fetch).toHaveBeenCalled();
    });
  });
});
