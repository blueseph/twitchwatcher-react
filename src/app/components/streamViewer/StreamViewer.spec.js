import React from 'react';
import { StreamViewer } from './StreamViewer';
import { shallow } from 'enzyme';

function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    selected: {
      stream: {
        _id: 123,
        channel: {
          name: 'Reckful',
        },
      },
    },
  }, override);

  const wrapper = shallow(<StreamViewer {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('streamviewer component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('iframe').length).toBe(1);
  });

  it('should render nothing if there is no selected stream', () => {
    const { wrapper } = setup({ selected: { stream: 0 } });

    expect(wrapper.find('iframe').length).toBe(0);
  });
});
