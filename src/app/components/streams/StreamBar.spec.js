import React from 'react';
import { StreamBar } from './StreamBar';
import { shallow, mount } from 'enzyme';


function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    stream: [{}],
    filters: {},
    games: [{}],
    actions: {
      games: {
        fetch: jasmine.createSpy(),
      },
      stream: {
        fetch: jasmine.createSpy(),
      },
    },
  }, override);

  const wrapper = shallow(<StreamBar {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('namefilter component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('stream-bar')).toBe(true);
  });

  it('should call functions on componentDidMount', () => {
    const cdmProps = {
      dispatch: jasmine.createSpy(),
      streams: { data: [{
        preview: {
          medium: 'img.png',
        },
        channel: {
          status: 'Diabolos -- Please send raid group energy. (I HAVE NO IDEA WHAT I\'M DOING)',
          display_name: 'Psychomidget',
        },
        viewers: 99,
      },
      ] },
      filters: {},
      games: { data: [{}] },
      actions: {
        games: {
          fetch: jasmine.createSpy(),
        },
        stream: {
          fetch: jasmine.createSpy(),
        },
      },
    };

    expect(cdmProps.actions.games.fetch).not.toHaveBeenCalled();
    expect(cdmProps.actions.stream.fetch).not.toHaveBeenCalled();

    const wrapper = mount(<StreamBar {...cdmProps} />);
    wrapper.update();

    expect(cdmProps.actions.games.fetch).toHaveBeenCalled();
    expect(cdmProps.actions.stream.fetch).toHaveBeenCalled();
  });
});
