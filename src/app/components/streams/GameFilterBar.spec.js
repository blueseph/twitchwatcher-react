import React from 'react';
import { GameFilterBar } from './GameFilterBar';
import { mount } from 'enzyme';

function setup(override) {
  const props = Object.assign({}, {
    dispatch: jasmine.createSpy(),
    games: {
      data: [
        {
          name: 'World of Warcraft',
          id: '123',
        },
      ],
    },
    actions: {
      filterGame: jasmine.createSpy(),
    },
  }, override);

  const wrapper = mount(<GameFilterBar {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('game filter component', () => {
  it('should render itself', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').hasClass('game-filter-bar')).toBe(true);

    expect(wrapper.ref('filter').length).toBe(1);
  });

  it('should handle the onclick event', () => {
    const { wrapper, props } = setup();

    wrapper.ref('filter').get(0).value = 'World of Warcraft';
    wrapper.ref('filter').simulate('change', { target: { value: 'World of Warcraft' } });

    expect(props.dispatch).toHaveBeenCalled();
    expect(props.actions.filterGame).toHaveBeenCalledWith('World of Warcraft');
  });
});
