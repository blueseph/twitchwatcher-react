import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
                rootReducer,
                initialState,
                window.devToolsExtension && window.devToolsExtension()
              );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
