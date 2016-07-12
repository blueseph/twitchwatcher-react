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
      stream: {
        showStreams: jasmine.createSpy(),
        hideStreams: jasmine.createSpy,
      },
    },
  }, override);

  const wrapper = shallow(<Streams {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('streams component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(1);
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
});
