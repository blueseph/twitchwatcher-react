import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import * as utils from './TwitchUtils';
import nock from 'nock';

const middlewares = [thunk];

export function mockStore(getState, expectedActions, onLastAction, expect) {
  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();
        expect(action).toEqual(expectedAction);
        if (onLastAction && !expectedActions.length) {
          onLastAction();
        }
        return action;
      },
    };
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}
