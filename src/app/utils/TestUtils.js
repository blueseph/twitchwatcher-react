import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const middlewares = [thunk];

export function mockStore(getState, expectedActions, onLastAction, expect) {
  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return getState;
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

export function testAsync(runAsync) {
  return done =>
    runAsync().then(done, e => { fail(e); done(); });
}
