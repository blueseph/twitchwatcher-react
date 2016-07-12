import React from 'react';
import { Streams } from './Streams';
import { shallow } from 'enzyme';


function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    filters: {},
    streams: {
      data: [{}],
    },
    actions: {
      showStreams: jasmine.createSpy(),
      hideStreams: jasmine.createSpy(),
    },
  }, override);

  const wrapper = shallow(<Streams {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('namefilter component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should render loader if loading', () => {
    const { wrapper } = setup({ streams: { isFetching: true } });

    expect(wrapper.find('Loader').length).toBe(1);
  });

  it('should return an error if unable to load streams', () => {
    const { wrapper } = setup({ streams: { streamFetchError: true } });

    expect(wrapper.find('ul').text()).toBe(' Can\'t load streams ');
  });

  it('should return an error if unable to load streams', () => {
    const { wrapper } = setup({ streams: { data: undefined } });

    expect(wrapper.find('ul').text()).toBe(' No Streams Found ');
  });

  describe('should handle the click event', () => {
    it('should hide if shown', () => {
      const { props, wrapper } = setup({ streams: { visible: true } });

      wrapper.find('.toggle').simulate('click');
      expect(props.actions.hideStreams).toHaveBeenCalled();
      expect(wrapper.find('.toggle').text()).toEqual(' Hide ');
    });

    it('should show if hidden', () => {
      const { props, wrapper } = setup({ streams: { visible: false } });

      wrapper.find('.toggle').simulate('click');
      expect(props.actions.showStreams).toHaveBeenCalled();
      expect(wrapper.find('.toggle').text()).toEqual(' Show ');
    });
  });
});
